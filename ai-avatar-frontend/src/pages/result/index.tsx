import { useState, useEffect } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { observer } from 'mobx-react'
import { avatarApi } from '@/services/api'
import './index.scss'


export default observer(function ResultPage() {
  const [resultImage, setResultImage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(() => {
    const taskId = Taro.getCurrentInstance().router?.params.taskId;
    if (taskId) {
      pollTaskStatus(taskId);
    }
  }, []);
  
  const pollTaskStatus = async (taskId) => {
    let completed = false;
    while (!completed) {
      try {
        const result = await avatarApi.getTaskResult(taskId);
    
        if (result.data.status === 1) {
          completed = true;
          setResultImage(result.data.resultImageUrl);
          setLoading(false);
        } else if (result.data.status === 2) {
          completed = true;
          setError(result.data.errorMessage);
          setLoading(false);
        } else {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      } catch (error) {
        completed = true;
        setError('查询任务状态失败');
        setLoading(false);
      }
    }
  }

  const handleSave = async () => {
    if (resultImage) {
      try {
        await Taro.saveImageToPhotosAlbum({
          filePath: resultImage
        });
        Taro.showToast({ title: '保存成功', icon: 'success' });
      } catch (error) {
        Taro.showToast({ title: '保存失败', icon: 'none' });
      }
    }
  };

  const handleShare = () => {
    Taro.showShareMenu({
      withShareTicket: true
    });
  };

  return (
    <View className='result'>
      {loading ? (
        <View className='loading'>
          <View className='loading-icon'>xxxxx</View>
          <View className='loading-text'>生成中...</View>
        </View>
      ) : (
        <>
          <View className='result-image'>
            <Image src={resultImage} mode='aspectFit' />
          </View>
          <View className='action-bar'>
            <View className='action-btn save-btn' onClick={handleSave}>
              保存到相册
            </View>
            <View className='action-btn share-btn' onClick={handleShare}>
              分享
            </View>
          </View>
        </>
      )}
    </View>
  )
})
