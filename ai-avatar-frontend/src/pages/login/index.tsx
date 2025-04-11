import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import { userApi } from '../../services/api'
import './index.scss'

export default function Login() {
  const [loading, setLoading] = useState(false)

  // 获取用户信息
  const getUserProfile = async () => {
    try {
      // 调用获取用户信息接口
      const profileRes = await Taro.getUserProfile({
        desc: '用于完善用户资料' // 声明获取用户个人信息后的用途
      })
      
      return {
        avatarUrl: profileRes.userInfo.avatarUrl,
        nickName: profileRes.userInfo.nickName
      }
    } catch (err) {
      console.error('获取用户信息失败:', err)
      return null
    }
  }

   const handleLogin = async () => {
    try {
      setLoading(true)
      
      // 获取微信登录code
      const { code } = await Taro.login()
      const userInfo = await getUserProfile()
    
      // 调用后端登录接口，同时传递用户信息
      const res = await userApi.login({
        code,
        avatarUrl: userInfo?.avatarUrl,
        nickName: userInfo?.nickName
      })

      if (res.data.code !== 200) {
        Taro.showToast({
          title: '登陆失败',
          icon: 'none'
        })
        return
      }
      
     
      // 保存token
      Taro.setStorageSync('token', res.data.data)
      
      // 获取用户信息
      // const profile = await userApi.getProfile()
      // Taro.setStorageSync('userInfo', profile.data)
      
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
        <Image className='logo' src='../../assets/images/logo.png' />
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