import  {  useEffect, useState} from 'react';
import { View, Text, Button } from '@tarojs/components';
import './index.scss';
import { useDidShow } from '@tarojs/taro';
import Taro from '@tarojs/taro'


let privacyHandler;
let privacyResolves = new Set<Function>();


// PrivacyPopup.tsx
interface Props {
    visible: boolean;
    onAgree?: () => void;
    onDisagree?: () => void;
  }
  
  

if (Taro?.onNeedPrivacyAuthorization) {
  Taro?.onNeedPrivacyAuthorization(resolve => {
    privacyHandler?.(resolve);
  });
}

export default function PrivacyPopup (props:Props) {
    console.log("ppppppp",props)
  const [visible, setVisible] = useState<boolean>(props.visible);

  // 当props.visible变化时更新本地状态
  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  const handleDisagree = () => {
    setVisible(false);
    privacyResolves.forEach(resolve => {
      resolve({
        event: 'disagree'
      });
    });
    privacyResolves.clear();
    // 调用父组件的onDisagree回调
    if (props.onDisagree) {
      props.onDisagree();
    }
  };

  const handleAgree = async () => {
    console.log('PrivacyPopup: 用户点击同意按钮');
    
    try {
      // 先调用微信的隐私授权API
      await Taro.requirePrivacyAuthorize();
      
      // 处理所有等待中的隐私授权请求
      privacyResolves.forEach(resolve => {
        resolve({
          event: 'agree',
          buttonId: 'agree-btn'
        });
      });
      privacyResolves.clear();
      
      // 更新UI状态
      setVisible(false);
      
      // 调用父组件的onAgree回调
      if (props.onAgree) {
        console.log('PrivacyPopup: 调用父组件的onAgree回调');
        props.onAgree();
      }
    } catch (err) {
      console.error('隐私授权失败:', err);
      Taro.showToast({
        title: '隐私授权失败，请重试',
        icon: 'none'
      });
    }
  };

  useEffect(() => {
    privacyHandler = resolve => {
      privacyResolves.add(resolve);
      setVisible(true);
    };
  }, []);
  
  // useDidShow还需要调用的原因：比如当前页面需要隐私弹窗，但未触发弹出，允许用户点有些按钮跳转去其他需要隐私弹窗的页面。用户再回退当前页面，此时privacyHandler要重新设置成当前页面的弹窗
  useDidShow(() => {
    privacyHandler = resolve => {
      privacyResolves.add(resolve);
      setVisible(true);
    };
  });

  const openPrivacyContract = () => {
    Taro?.openPrivacyContract({
      success: () => {
        console.log('openPrivacyContract success');
      },
      fail: res => {
        console.error('openPrivacyContract fail', res);
      }
    });
  };

  return (
    <View className="pp-container">
      {visible && <View className="pp-mask" />}
      {visible && (
        <View className="pp-wrap">
          <View className="pp-head">
            <View className="pp-head-title">用户隐私保护提示</View>
          </View>
          <View className="pp-content">
            <View className='privacy-content'>
              <View className='privacy-title'>隐私保护指引</View>
              <View className='privacy-text'>
                感谢您使用我们的服务。为了更好地保护您的个人信息，请您仔细阅读以下内容：
              </View>
              <View className='privacy-text'>
                1. 我们可能会收集您的以下信息：
                - 微信头像和昵称
                - 相册中的图片（用于头像生成）
                - 设备信息
              </View>
              <View className='privacy-text'>
                2. 我们承诺：
                - 仅将您的信息用于提供服务
                - 不会将您的信息用于其他用途
                - 采取严格的安全措施保护您的信息
              </View>
              <View className='privacy-text'>
                3. 您需要授权：
                - 获取用户信息（头像、昵称）
                - 访问相册（用于选择头像图片）
              </View>
              <View className='privacy-text'>
                4. 权限说明：
                - 相册权限：用于选择头像图片
                - 相机权限：用于拍摄头像图片
                - 存储权限：用于保存生成的头像
              </View>
              <View className='privacy-text'>
                5. 隐私协议：
                我们严格遵守微信小程序的隐私协议要求，包括但不限于：
                - 明确告知用户收集的信息类型和用途
                - 获取用户明确授权
                - 保护用户数据安全
                - 遵守相关法律法规
              </View>
              <View className='privacy-text'>
                如您同意以上内容，请点击"同意"继续使用我们的服务。
              </View>
            </View>
          </View>
          <View className="pp-footer">
            <Button id="disagree-btn" className="pp-btn pp-btn_refuse" onClick={handleDisagree}>
              拒绝
            </Button>
            <Button
              id="agree-btn"
              className="pp-btn"
              onClick={handleAgree}
            >
              同意
            </Button>
          </View>
          <View className="pp-safearea" />
        </View>
      )}
    </View>
  );
};


