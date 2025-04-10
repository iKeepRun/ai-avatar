import { FC } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

interface Props {
  color: string
  onChange: (color: string) => void
}

const ColorPicker: FC<Props> = ({ color, onChange }) => {
  return (
    <View className='color-picker'>
      <View 
        className='color-preview'
        style={{ backgroundColor: color }}
        onClick={() => {
          // 这里应该打开颜色选择器，但微信小程序没有原生的颜色选择器
          // 可以考虑使用第三方组件或自定义实现
          onChange('#000000')
        }}
      />
    </View>
  )
}

export default ColorPicker 