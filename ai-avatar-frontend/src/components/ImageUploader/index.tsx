import { FC } from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { observer } from 'mobx-react'
import './index.scss'

interface ImageUploaderProps {
  onImageSelected: (filePath: string) => void
}

const ImageUploader: FC<ImageUploaderProps> = ({ onImageSelected }) => {
  const handleChooseImage = () => {
    Taro.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0]
        onImageSelected(tempFilePath)
      }
    })
  }

  return (
    <View className='image-uploader' onClick={handleChooseImage}>
      <View className='upload-icon'>
        <View className='icon-camera'></View>
      </View>
      <View className='upload-text'>点击上传照片或拍摄</View>
      <View className='upload-desc'>支持JPG、PNG格式</View>
    </View>
  )
}

export default observer(ImageUploader) 