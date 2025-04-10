import { FC, useEffect } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

interface ToastProps {
  visible: boolean
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
  onClose: () => void
}

const Toast: FC<ToastProps> = ({
  visible,
  message,
  type = 'info',
  duration = 2000,
  onClose
}) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [visible])

  if (!visible) return null

  return (
    <View className={`toast-component ${type}`}>
      {type !== 'info' && (
        <View className={`toast-icon icon-${type}`} />
      )}
      <View className='toast-message'>{message}</View>
    </View>
  )
}

export default Toast 