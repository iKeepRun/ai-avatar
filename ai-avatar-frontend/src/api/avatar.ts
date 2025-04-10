import Taro from '@tarojs/taro'
import { BASE_URL } from '@/constants/config'

export const uploadImage = async (filePath: string) => {
  return await Taro.uploadFile({
    url: `${BASE_URL}/api/v1/avatars`,
    filePath,
    name: 'image',
    header: {
      'Authorization': `Bearer ${Taro.getStorageSync('token')}`
    }
  })
}

export const getGenerationResult = async (taskId: string) => {
  return await Taro.request({
    url: `${BASE_URL}/api/v1/avatars/${taskId}`,
    method: 'GET',
    header: {
      'Authorization': `Bearer ${Taro.getStorageSync('token')}`
    }
  })
}

export const updateStyle = async (taskId: string, styleType: string) => {
  return await Taro.request({
    url: `${BASE_URL}/api/v1/avatars/${taskId}/style`,
    method: 'PUT',
    data: { styleType },
    header: {
      'Authorization': `Bearer ${Taro.getStorageSync('token')}`
    }
  })
} 