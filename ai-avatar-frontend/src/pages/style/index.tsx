import Taro from '@tarojs/taro'
import { useEffect, useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import { useStore } from '@/stores'
import { avatarApi, generateAvatar } from '@/services/api'

// 导入图标
import iconGhibli from '@/assets/images/ghibli.png'
import iconCartoon from '@/assets/images/cartoon.png'
import iconCyberpunk from '@/assets/images/cyberpunk.png'
import iconWatercolor from '@/assets/images/watercolor.png'
import iconStar from '@/assets/images/star.png'
import iconCrown from '@/assets/images/crown.png'
import logo from '@/assets/images/logo.png'
import iconAnime from '@/assets/images/style-anime.png'
import iconPixar from '@/assets/images/style-pixar.png'

// 风格映射
// const styleMap = [
//   { name: "复古漫画", icon: './assets/images/style-comic.png' },
//   { name: "3D童话", icon: './assets/images/style-fairytale.png' },
//   { name: "二次元", icon: './assets/images/style-anime.png' },
//   { name: "小清新", icon: './assets/images/style-light.png' },
//   { name: "未来科技", icon: './assets/images/style-future.png' },
//   { name: "国画古风", icon: './assets/images/style-chinese.png' },
//   { name: "将军百战", icon: './assets/images/style-warrior.png' },
//   { name: "炫彩卡通", icon: './assets/images/style-cartoon.png' },
//   { name: "清雅国风", icon: './assets/images/style-chinese.png' },
//   { name: "喜迎新年", icon: './assets/images/style-newyear.png' },
// ]
const styleMap = [
  { name: "复古漫画", icon: './assets/images/cartoon.png' },
  { name: "3D童话", icon: './assets/images/cartoon.png' },
  { name: "二次元", icon: './assets/images/cartoon.png' },
  { name: "小清新", icon: './assets/images/cartoon.png' },
  { name: "未来科技", icon: './assets/images/cartoon.png' },
  { name: "国画古风", icon: './assets/images/cartoon.png' },
  { name: "将军百战", icon: './assets/images/cartoon.png' },
  { name: "炫彩卡通", icon: './assets/images/cartoon.png' },
  { name: "清雅国风", icon: './assets/images/cartoon.png' },
  { name: "喜迎新年", icon: './assets/images/cartoon.png' },
]

export default function StylePage() {
  const [loading, setLoading] = useState(false)
  const { avatarStore, userStore } = useStore()
  const [resultImage, setResultImage] = useState('')
  
  
  // const handleSelect = async (styleId) => {
  //   try {
  //     setLoading(true)
  //     // 调用API更新风格选择
  //     await avatarApi.updateStyle(taskId, styleId)
  //     // 保存到store
  //     avatarStore.setCurrentStyle(styleId)
  //     // 跳转到结果页
  //     Taro.navigateTo({ url: `/pages/result/index?taskId=${taskId}` })
  //   } catch (error) {
  //     Taro.showToast({ title: '选择风格失败', icon: 'none' })
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  const handleSelect = async (style: string) => {
    try {
      setLoading(true);
      // 调用生成头像的后端接口
      const res = await generateAvatar(avatarStore.cosImageUrl, style);
      const taskId = res.data.data; // 获取任务ID
    
      // 存储任务ID
      avatarStore.setTaskId(taskId);
      
      // 跳转到结果页面
      Taro.navigateTo({
        url: `/pages/result/index?taskId=${taskId}`
      });
    } catch (error) {
      Taro.showToast({
        title: '生成失败',
        icon: 'none'
      });
    } finally {
      setLoading(false);
    }
  }

   
  return (
    <View className='style-page'>
      <View className='title'>选择风格</View>

      <View className='grid'>
        {styleMap.map(style => (
          <View
            key={style.name}
            className='style-card'
            onClick={() => !loading && handleSelect(style.name)}
          >
            <Image className='icon' src={style.icon} mode='aspectFit' />
            <View className='name'>{style.name}</View>
          </View>
        ))}
      </View>

      <View className='vip-section'>
        <View className='vip-title'>
          <Image className='crown' src={iconCrown} mode='aspectFit' />
          <Text>会员专属风格</Text>
        </View>

        <View className='grid'>
          <View className='vip-card' onClick={() => userStore.isVip && !loading && handleSelect('premium1')}>
            <Image className='icon' src={iconStar} mode='aspectFit' />
            <View className='name'>高级风格1</View>
          </View>
          <View className='vip-card' onClick={() => userStore.isVip && !loading && handleSelect('premium2')}>
            <Image className='icon' src={iconStar} mode='aspectFit' />
            <View className='name'>高级风格2</View>
          </View>
        </View>
      </View>
    </View>
  )
} 

function showError(errorMessage: any) {
  throw new Error('Function not implemented.')
}
