import { FC, useState, useEffect } from 'react'
import { View, Image, Text, Button, ScrollView, Slider } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { observer } from 'mobx-react'
import { useStore } from '@/stores'
import { avatarApi } from '@/services/api'
import  ColorPicker from '@/components/ColorPicker'
import './index.scss'

const EditPage: FC = () => {
  const { avatarStore } = useStore()
  const [activeTab, setActiveTab] = useState('basic')
  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState({
    faceRatio: 50,
    hairColor: '#000000',
    backgroundComplexity: 30
  })

  useEffect(() => {
    startPreview()
  }, [params])

  const startPreview = async () => {
    try {
      setLoading(true)
      const res = await avatarApi.updateParams(avatarStore.taskId, params)
      avatarStore.setPreviewImage(res.data.previewUrl)
    } catch (error) {
      Taro.showToast({ title: '预览失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  const handleParamChange = (key: string, value: number | string) => {
    setParams(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleGenerate = async () => {
    try {
      setLoading(true)
      await avatarApi.generate(avatarStore.taskId, params)
      Taro.navigateTo({ url: `/pages/result/index?taskId=${avatarStore.taskId}` })
    } catch (error) {
      Taro.showToast({ title: '生成失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='edit-page'>
      <View className='preview-area'>
        <Image 
          className='preview-image'
          src={avatarStore.previewImage || avatarStore.originalImage}
          mode='aspectFill'
        />
        {loading && (
          <View className='loading-mask'>
            <View className='loading-icon'></View>
            <View className='loading-text'>预览生成中...</View>
          </View>
        )}
      </View>

      <View className='edit-area'>
        <View className='tab-bar'>
          <View 
            className={`tab-item ${activeTab === 'basic' ? 'active' : ''}`}
            onClick={() => setActiveTab('basic')}
          >
            基础调整
          </View>
          <View 
            className={`tab-item ${activeTab === 'advanced' ? 'active' : ''}`}
            onClick={() => setActiveTab('advanced')}
          >
            高级调整
          </View>
        </View>

        <ScrollView scrollY className='params-list'>
          {activeTab === 'basic' && (
            <>
              <View className='param-item'>
                <View className='param-label'>
                  <Text>五官比例</Text>
                  <Text className='param-value'>{params.faceRatio}%</Text>
                </View>
                <Slider
                  value={params.faceRatio}
                  min={0}
                  max={100}
                  onChange={e => handleParamChange('faceRatio', e.detail.value)}
                />
              </View>

              <View className='param-item'>
                <View className='param-label'>发色</View>
                <ColorPicker
                  color={params.hairColor}
                  onChange={color => handleParamChange('hairColor', color)}
                />
              </View>

              <View className='param-item'>
                <View className='param-label'>
                  <Text>背景复杂度</Text>
                  <Text className='param-value'>{params.backgroundComplexity}%</Text>
                </View>
                <Slider
                  value={params.backgroundComplexity}
                  min={0}
                  max={100}
                  onChange={e => handleParamChange('backgroundComplexity', e.detail.value)}
                />
              </View>
            </>
          )}
        </ScrollView>

        <View className='action-bar'>
          <Button 
            className='reset-btn'
            onClick={() => setParams({
              faceRatio: 50,
              hairColor: '#000000',
              backgroundComplexity: 30
            })}
          >
            重置
          </Button>
          <Button 
            className='generate-btn'
            loading={loading}
            onClick={handleGenerate}
          >
            生成头像
          </Button>
        </View>
      </View>
    </View>
  )
}

export default observer(EditPage) 