import { View, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { userApi } from '../../services/api'
import './index.scss'
import PrivacyPopup from '@/components/PrivacyPopup'

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [privacyResolves, setPrivacyResolves] = useState<Set<Function>>(new Set());
  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);




  

  const handleLogin = async () => {
    // 获取微信登录code
    const { code } = await Taro.login();

    if (!code) {
      throw new Error('获取登录code失败');
    }

    // 调用后端登录接口
    const res = await userApi.login({
      code
      // avatarUrl: userInfo.avatarUrl,
      // nickName: userInfo.nickName
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
  };

  return (
    <>
      {/* <PrivacyPopup
        visible={privacyVisible}
        onAgree={handlePrivacyAgree}
        onDisagree={handlePrivacyDisagree}
      /> */}
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
            <View className='tip-item' >我们承诺保护您的隐私安全</View>
          </View>
        </View>
      </View>
    </>
  );
} 