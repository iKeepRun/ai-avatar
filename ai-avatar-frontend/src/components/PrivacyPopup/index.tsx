import { useEffect, useState } from 'react';
import { View, Button } from '@tarojs/components';
import './index.scss';


// PrivacyPopup.tsx
interface Props {
  visible: boolean;
  onAgree: () => void;
  onDisagree: () => void;
}



export default function PrivacyPopup(props: Props) {

  const handleDisagree = () => {
    if (props.onDisagree) {
      props.onDisagree();
    }
  };

  const handleAgree = async () => {
    console.log('PrivacyPopup: 用户点击同意按钮');
    // 调用父组件的onAgree回调
    if (props.onAgree) {
      console.log('PrivacyPopup: 调用父组件的onAgree回调');
      props.onAgree();
    }
  };


  return (
    <View className="pp-container">
      {props.visible && <View className="pp-mask" />}
      {props.visible && (
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


