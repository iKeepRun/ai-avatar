import { FC } from 'react'
import { View, Image } from '@tarojs/components'
import './index.scss'

interface EmptyProps {
  text?: string
  image?: string
}

const Empty: FC<EmptyProps> = ({ 
  text = '暂无数据', 
  image = 'empty-placeholder.png' 
}) => {
  return (
    <View className='empty-component'>
      <Image className='empty-image' src={image} />
      <View className='empty-text'>{text}</View>
    </View>
  )
}

export default Empty 