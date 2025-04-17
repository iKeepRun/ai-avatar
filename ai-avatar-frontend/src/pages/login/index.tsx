import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { userApi } from '../../services/api'
import './index.scss'
import PrivacyPopup from '@/components/PrivacyPopup'

export default function Login() {
  const [loading, setLoading] = useState(false)

  const [privacyResolves, setPrivacyResolves] = useState<Set<Function>>(new Set());
  // 隐私弹窗显示控制
  const [privacyVisible, setPrivacyVisible] = useState(false);
  // 添加一个标志表示用户是否同意了隐私授权
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  
  // 初始化隐私监听（兼容旧版Taro）
  useEffect(() => {
    Taro.onNeedPrivacyAuthorization(resolve => {
      privacyResolves.add(resolve);
      setPrivacyVisible(true);
    });
  }, []);


  // 处理隐私授权同意
  const handlePrivacyAgree = async () => {
    console.log('用户同意隐私授权');
    
    try {
      setLoading(true);
      
      // 调用微信的隐私授权API
      await Taro.requirePrivacyAuthorize();
      
      // 更新UI状态
      setPrivacyVisible(false);
      setPrivacyAgreed(true);
      
      // 保存隐私授权状态
      Taro.setStorageSync('privacyAgreed', true);
    } catch (err) {
      console.error('隐私授权失败:', err);
      Taro.showToast({
        title: '隐私授权失败，请重试',
        icon: 'none'
      });
      // 重置状态
      setPrivacyAgreed(false);
    } finally {
      setLoading(false);
    }
  };

  // 处理获取用户信息和登录
  const handleGetUserInfo = async (e) => {
    console.log('获取用户信息', e);
    
    if (!privacyAgreed) {
      Taro.showToast({
        title: '请先同意隐私授权',
        icon: 'none'
      });
      console.log('return return 1')
      return;
    }

    if (!e || !e.detail || !e.detail.userInfo) {
      console.log('用户拒绝授权获取用户信息');
      Taro.showToast({
        title: '需要授权获取用户信息才能继续',
        icon: 'none'
      });
      console.log('return return2 ')
      return;
    }

    try {
      setLoading(true);
      // 保存用户信息
      Taro.setStorageSync('userInfo', e.detail.userInfo);
      
      // 获取微信登录code
      const { code } = await Taro.login();

      console.log('code', code);
      if (!code) {
        throw new Error('获取登录code失败');
      }
      
      // 调用后端登录接口
      const res = await userApi.login({
        code,
        avatarUrl: e.detail.userInfo.avatarUrl,
        nickName: e.detail.userInfo.nickName
      });

      if (res.data.code !== 200) {
        throw new Error(res.data.msg || '登录失败');
      }
      
      // 保存token
      Taro.setStorageSync('token', res.data.data);
      
      // 返回首页
      Taro.switchTab({
        url: '/pages/index/index'
      });
    } catch (err) {
      console.error('登录流程失败:', err);
      Taro.showToast({
        title: err.message || '登录失败，请重试',
        icon: 'none'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (loading) return;
    
    // 如果已经同意了隐私授权，直接触发获取用户信息
    if (privacyAgreed) {
      return;
    }
    
    try {
      setLoading(true);
      // 显示隐私弹窗
      setPrivacyVisible(true);
      setPrivacyAgreed(false);
    } catch (err) {
      console.error('显示隐私弹窗失败:', err);
      Taro.showToast({
        title: '系统错误，请重试',
        icon: 'none'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDisagree = () => {
    setPrivacyVisible(false);
    setPrivacyAgreed(false);
    Taro.showToast({
      title: '需要同意隐私授权才能继续',
      icon: 'none'
    });
  };

  
  return (
    <>
      <PrivacyPopup
        visible={privacyVisible}
        onAgree={handlePrivacyAgree}
        onDisagree={handleDisagree}
      />
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
            openType="getUserInfo"
            onGetUserInfo={handleGetUserInfo}
          >
            微信一键登录
          </Button>
        </View>

        <View className='footer'>
          <View className='tips'>
            <View className='tip-item'>登录后即可使用完整功能</View>
            <View className='tip-item' >我们承诺保护您的隐私安全</View>
          </View>
        </View>
      </View>
    </>
  )
} 