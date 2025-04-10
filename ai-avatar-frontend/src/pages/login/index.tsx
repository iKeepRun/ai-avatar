import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { userApi } from '../../services/api'
import './index.scss'

export default function Login() {
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      
      // 获取微信登录code
      const { code } = await Taro.login()
      
      // 调用后端登录接口
      const res = await userApi.login(code)
      
      // 保存token
      Taro.setStorageSync('token', res.data.token)
      
      // 获取用户信息
      const userInfo = await userApi.getProfile()
      Taro.setStorageSync('userInfo', userInfo.data)
      
      // 返回首页
      Taro.switchTab({
        url: '/pages/index/index'
      })
    } catch (err) {
      console.error('登录失败:', err)
      Taro.showToast({
        title: '登录失败，请重试',
        icon: 'none'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='login-page'>
      <View className='header'>
        <Image className='logo' src='./assets/images/logo.svg' />
        <View className='title'>AI头像生成器</View>
        <View className='subtitle'>一键生成你的专属头像</View>
      </View>

      <View className='content'>
        <Button 
          className='login-button'
          loading={loading}
          onClick={handleLogin}
        >
          微信一键登录
        </Button>
      </View>

      <View className='footer'>
        <View className='tips'>
          <View className='tip-item'>登录后即可使用完整功能</View>
          <View className='tip-item'>我们承诺保护您的隐私安全</View>
        </View>
      </View>
    </View>
  )
} 