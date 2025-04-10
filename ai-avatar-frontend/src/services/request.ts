import Taro from '@tarojs/taro'
import { BASE_URL } from '@/constants/config'

interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: any
  header?: Record<string, string>
}

export const request = async <T>(options: RequestOptions): Promise<T> => {
  const token = Taro.getStorageSync('token')
  
  try {
    const response = await Taro.request({
      url: `${BASE_URL}${options.url}`,
      method: options.method || 'GET',
      data: options.data,
      header: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
        ...options.header
      }
    })

    if (response.statusCode === 401) {
      // token过期，重新登录
      await handleReLogin()
      return request(options)
    }

    if (response.statusCode !== 200) {
      throw new Error(response.data.message || '请求失败')
    }

    return response.data
  } catch (error) {
    Taro.showToast({
      title: error.message || '网络错误',
      icon: 'none'
    })
    throw error
  }
}

const handleReLogin = async () => {
  try {
    await Taro.removeStorageSync('token')
    Taro.redirectTo({ url: '/pages/login/index' })
  } catch (error) {
    console.error('重新登录失败', error)
  }
} 