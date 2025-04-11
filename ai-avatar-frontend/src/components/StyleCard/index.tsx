import { View, Image, Text } from '@tarojs/components'
import { FC } from 'react'
import './index.scss'

export interface StyleCardProps {
  id: string
  name: string
  image: string
  isVip?: boolean
  selected?: boolean
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  onSelect?: () => void
}

const StyleCard: FC<StyleCardProps> = ({
  id,
  name,
  image,
  isVip = false,
  selected = false,
  onClick
}) => {
  return (
    <View className={`style-card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <Image className='style-image' src={image} mode='aspectFill' />
      <View className='style-info'>
        <Text className='style-name'>{name}</Text>
        {isVip && (
          <View className='vip-tag'>
            <Text className='vip-text'>VIP</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default StyleCard 