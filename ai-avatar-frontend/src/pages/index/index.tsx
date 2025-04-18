import { View, Image, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import { uploadImage} from '../../services/api'
import './index.scss'

// 导入图片
import logo from '@/assets/images/logo.png'
import upload from '@/assets/images/upload.png'
import { useStore } from '@/stores'


export default function Index() {
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { avatarStore } = useStore()
  
  useLoad(() => {
    // 检查登录状态
    const token = Taro.getStorageSync('token')
    if (!token) {
      Taro.navigateTo({
        url: '/pages/login/index'
      })
      return
    }
  })

  const handleChooseImage = async () => {
    try {
     
      console.log('开始选择图片...')
      
      // 选择图片
      const res = await Taro.chooseMedia({
        count: 1,
        mediaType: ['image'],  
      })

      if (res.tempFiles && res.tempFiles[0]) {
        console.log('设置图片路径:', res.tempFiles[0])
        setImageUrl(res.tempFiles[0].tempFilePath)
        setError('')
      } else {
        console.error('未获取到图片路径')
        setError('未获取到图片，请重试')
      }
    } catch (err) {
      console.error('选择图片失败:', {
        error: err,
        errMsg: err.errMsg,
        type: typeof err,
        stack: err.stack
      })
      
      const errMsg = err.errMsg || ''
      console.log('错误信息:', errMsg)
      
      if (errMsg.includes('authorize')) {
        // 用户拒绝授权
        Taro.showModal({
          title: '提示',
          content: '需要允许访问相册才能选择图片',
          confirmText: '去设置',
          success: (res) => {
            if (res.confirm) {
              Taro.openSetting()
            }
          }
        })
      } else if (errMsg.includes('cancel')) {
        // 用户取消选择
        setError('已取消选择图片')
      } else {
        // 尝试获取更多错误信息
        Taro.getSetting({
          success: (res) => {
            console.log('当前权限设置:', res.authSetting)
          },
          fail: (err) => {
            console.error('获取权限设置失败:', err)
          }
        })
        
        setError(`选择图片失败: ${errMsg}`)
      }
    }
  }

  const handleNext = async () => {
    if (!imageUrl) {
      setError('请先选择图片')
      return
    }

    // const token = Taro.getStorageSync('token')
    // console.log("从本地缓存中获取token",token)
    // if (!token) {
    //   Taro.navigateTo({
    //     url: '/pages/login/index'
    //   })
    //   return
    // }

    setLoading(true)
    setError('')

    try {
      // 上传图片
      const uploadRes = await uploadImage(imageUrl) 

      const result=JSON.parse(uploadRes.data)
      //设置 头像store 的 taskId
      // avatarStore.setTaskId(result.data)
      //设置 头像store 的 originalImage
      avatarStore.setOriginalImage(imageUrl)
      avatarStore.setCosImageUrl(result.data)
    
      // 跳转到风格选择页面
      Taro.navigateTo({
        url: `/pages/style/index`
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