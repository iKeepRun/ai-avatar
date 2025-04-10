import { FC } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

interface LoadingProps {
  text?: string
  size?: 'small' | 'medium' | 'large'
}

const Loading: FC<LoadingProps> = ({ 
  text = '加载中...', 
  size = 'medium' 
}) => {
  return (
    <View className={`loading-component ${size}`}>
      <View className='loading-spinner'></View>
      {text && <View className='loading-text'>{text}</View>}
    </View>
  )
}

export default Loading 