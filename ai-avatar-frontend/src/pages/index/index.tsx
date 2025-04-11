import { View, Image, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import { uploadImage, updateStyle, generateAvatar } from '../../services/api'
import { AVATAR_STATUS } from '../../constants/config'
import './index.scss'

// 导入图片
import logo from '@/assets/images/logo.png'
import upload from '@/assets/images/upload.png'
import memberActive from '@/assets/images/member-active.png'

interface UploadResponse {
  data: {
    imageId: string
  }
}

export default function Index() {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useLoad(() => {
    // 检查登录状态
    const token = Taro.getStorageSync('token')
    if (!token) {
      Taro.navigateTo({
        url: '/pages/login/index'
      })
    }
  })

  const handleChooseImage = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera']
      })

      if (res.tempFilePaths && res.tempFilePaths[0]) {
        setImageUrl(res.tempFilePaths[0])
        setError('')
      }
    } catch (err) {
      console.error('选择图片失败:', err)
      setError('选择图片失败，请重试')
    }
  }

  const handleNext = async () => {
    if (!imageUrl) {
      setError('请先选择图片')
      return
    }

    const token = Taro.getStorageSync('token')
    console.log("从本地缓存中获取token",token)
    if (!token) {
      Taro.navigateTo({
        url: '/pages/login/index'
      })
      return
    }

    setLoading(true)
    setError('')

    try {
      // 上传图片
      const uploadRes = await uploadImage(imageUrl) as unknown as UploadResponse
      
      // 跳转到风格选择页面
      Taro.navigateTo({
        url: `/pages/style/index?imageId=${uploadRes.data.imageId}`
      })
    } catch (err) {
      console.error('上传失败:', err)
      setError('上传失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='index-page'>
      <View className='header'>
        <Image className='logo' src={logo} />
        <View className='title'>AI头像生成器</View>
      </View>

      <View className='content'>
        <View className='upload-section'>
          {imageUrl ? (
            <Image className='preview-image' src={imageUrl} mode='aspectFit' />
          ) : (
            <View className='upload-placeholder' onClick={handleChooseImage}>
              <Image className='upload-icon' src={upload} />
              <View className='upload-text'>点击上传照片</View>
            </View>
          )}
        </View>

        {error && <View className='error-message'>{error}</View>}

        <Button 
          className='next-button'
          loading={loading}
          disabled={!imageUrl || loading}
          onClick={handleNext}
        >
          下一步
        </Button>
      </View>

      <View className='footer'>
        <View className='tips'>
          <View className='tip-item'>照片大小不超过5MB</View>
          <View className='tip-item'>支持jpg、png格式</View>
          <View className='tip-item'>建议上传清晰的正面照片</View>
          
        </View>
      </View>
    </View>
  )
} 