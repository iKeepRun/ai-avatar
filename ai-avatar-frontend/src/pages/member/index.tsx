import { FC, useState, useEffect } from 'react'
import { View, Image, Button } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useStore } from '@/stores'
import { memberApi } from '@/services/api'
import './index.scss'

// 导入图片
import memberActive from '@/assets/images/member-active.png'

const MemberPage: FC = () => {
  const { userStore } = useStore()
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (memberType: number) => {
    try {
      setLoading(true)
      const res = await memberApi.subscribe(memberType)
      const { paymentParams } = res.data
      
      // 调用微信支付
      await Taro.requestPayment({
        ...paymentParams,
        success: () => {
          Taro.showToast({ title: '开通成功', icon: 'success' })
          userStore.updateMemberInfo()
        },
        fail: () => {
          Taro.showToast({ title: '支付取消', icon: 'none' })
        }
      })
    } catch (error) {
      Taro.showToast({ title: '开通失败', icon: 'none' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='member-page'>
      <View className='member-card'>
        <View className='card-header'>
          <View className='vip-icon'></View>
          <View className='vip-title'>AI头像会员</View>
        </View>
        <View className='privilege-list'>
          <View className='privilege-item'>
            <View className='icon-check'></View>
            <Text>解锁所有风格模板</Text>
          </View>
          <View className='privilege-item'>
            <View className='icon-check'></View>
            <Text>无水印导出</Text>
          </View>
          <View className='privilege-item'>
            <View className='icon-check'></View>
            <Text>批量导出</Text>
          </View>
          <View className='privilege-item'>
            <View className='icon-check'></View>
            <Text>优先生成队列</Text>
          </View>
        </View>
      </View>

      <View className='price-cards'>
        <View className='price-card' onClick={() => handleSubscribe(1)}>
          <View className='price-type'>月度会员</View>
          <View className='price-amount'>
            <Text className='symbol'>¥</Text>
            <Text className='number'>19.9</Text>
          </View>
          <View className='price-desc'>每月约0.66元/天</View>
        </View>
        <View className='price-card recommended' onClick={() => handleSubscribe(2)}>
          <View className='recommend-tag'>推荐</View>
          <View className='price-type'>年度会员</View>
          <View className='price-amount'>
            <Text className='symbol'>¥</Text>
            <Text className='number'>199</Text>
          </View>
          <View className='price-desc'>相当于16.6元/月</View>
        </View>
      </View>

      <View className='terms'>
        开通即表示同意<Text className='link'>《会员服务协议》</Text>
      </View>
    </View>
  )
}

export default observer(MemberPage) 