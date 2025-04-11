import Taro from '@tarojs/taro'
import { FC, useState } from 'react'
import { View, ScrollView, Image, Text, Button } from '@tarojs/components'
import { observer } from 'mobx-react'
import { StyleCard } from '@/components'
import { useStore } from '@/stores'
import { avatarApi } from '@/services/api'
import './index.scss'

const styles = [
  { id: 'ghibli', name: '吉卜力风格', icon: 'paint-brush', preview: 'ghibli.jpg' },
  { id: 'cartoon', name: '美式卡通', icon: 'smile', preview: 'cartoon.jpg' },
  { id: 'cyberpunk', name: '赛博朋克', icon: 'robot', preview: 'cyberpunk.jpg' },
  { id: 'watercolor', name: '水彩艺术', icon: 'palette', preview: 'watercolor.jpg' }
]

const StylePage: FC = () => {
  const [loading, setLoading] = useState(false)
  const { avatarStore, userStore } = useStore()
  const taskId = avatarStore.taskId

  const handleStyleSelect = async (styleId: string) => {
    try {
      setLoading(true)
      await avatarApi.updateStyle(taskId, styleId)
      avatarStore.setCurrentStyle(styleId)
      Taro.navigateTo({ url: `/pages/edit/index?taskId=${taskId}` })
    } catch (error) {
      Taro.showToast({ title: '选择风格失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='style-page'>
      <View className='preview-section'>
        <Image 
          className='original-image' 
          src={avatarStore.originalImage} 
          mode='aspectFill' 
        />
      </View>

      <View className='style-section'>
        <View className='section-title'>选择风格</View>
        <ScrollView scrollY className='style-list'>
          {styles.map(style => (
            <StyleCard
              key={style.id}
              {...style}
              disabled={!userStore.isVip && style.id !== 'ghibli'}
              loading={loading}
              onSelect={() => handleStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>

      {!userStore.isVip && (
        <View className='vip-tip'>
          <Text>开通会员解锁所有风格</Text>
          <Button 
            className='vip-button'
            onClick={() => Taro.navigateTo({ url: '/pages/member/index' })}
          >
            立即开通
          </Button>
        </View>
      )}
    </View>
  )
}

export default observer(StylePage) 