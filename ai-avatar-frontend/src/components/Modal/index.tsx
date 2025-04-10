import { FC } from 'react'
import { View } from '@tarojs/components'
import './index.scss'

interface ModalProps {
  visible: boolean
  title?: string
  content: string | React.ReactNode
  showCancel?: boolean
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm: () => void
}

const Modal: FC<ModalProps> = ({
  visible,
  title,
  content,
  showCancel = true,
  cancelText = '取消',
  confirmText = '确定',
  onCancel,
  onConfirm
}) => {
  if (!visible) return null

  return (
    <View className='modal-component'>
      <View className='modal-mask' />
      <View className='modal-content'>
        {title && <View className='modal-title'>{title}</View>}
        <View className='modal-body'>
          {typeof content === 'string' ? (
            <View className='modal-message'>{content}</View>
          ) : (
            content
          )}
        </View>
        <View className='modal-footer'>
          {showCancel && (
            <View className='modal-button cancel' onClick={onCancel}>
              {cancelText}
            </View>
          )}
          <View className='modal-button confirm' onClick={onConfirm}>
            {confirmText}
          </View>
        </View>
      </View>
    </View>
  )
}

export default Modal 