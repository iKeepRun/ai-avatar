import { FC, useState, useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { observer } from 'mobx-react'
import { useStore } from '@/stores'
import { avatarApi } from '@/services/api'
import './index.scss'

const ResultPage: FC = () => {
  const router = useRouter()
  const { avatarStore } = useStore()
  const [loading, setLoading] = useState(true)
  const [result, setResult] = useState('')

  useEffect(() => {
    checkResult()
  }, [])

  const checkResult = async () => {
    try {
      const res = await avatarApi.getResult(avatarStore.taskId)
      if (res.data.status === 'completed' && res.data.resultUrl) {
        setResult(res.data.resultUrl)
        setLoading(false)
      } else if (res.data.status === 'failed') {
        Taro.showToast({ title: '生成失败', icon: 'none' })
        setTimeout(() => {
          Taro.navigateBack()
        }, 1500)
      } else {
        setTimeout(checkResult, 1000)
      }
    } catch (error) {
      Taro.showToast({ title: '获取结果失败', icon: 'none' })
    }
  }

  const handleSave = async () => {
    try {
      await Taro.saveImageToPhotosAlbum({
        filePath: result
      })
      Taro.showToast({ title: '保存成功', icon: 'success' })
    } catch (error) {
      Taro.showToast({ title: '保存失败', icon: 'none' })
    }
  }

  const handleShare = () => {
    Taro.showShareMenu({
      withShareTicket: true
    })
  }

  return (
    <View className='result'>
      {loading ? (
        <View className='loading'>
          <View className='loading-icon'></View>
          <View className='loading-text'>生成中...</View>
        </View>
      ) : (
        <>
          <View className='result-image'>
            <Image src={result} mode='aspectFit' />
          </View>
          <View className='action-bar'>
            <View className='action-btn save-btn' onClick={handleSave}>
              保存到相册
            </View>
            <View className='action-btn share-btn' onClick={handleShare}>
              分享
            </View>
          </View>
        </>
      )}
    </View>
  )
}

export default observer(ResultPage) 