import Taro from '@tarojs/taro'
import { UserInfo, MemberInfo, AvatarResponse } from './types'
import { BASE_URL } from '../constants/config'

// 用户相关接口
export const userApi = {
  login: (data: { code: string; avatarUrl?: string; nickName?: string }) => {
    console.log('开始登录请求:', {
      url: `${BASE_URL}/api/v1/users/login`,
      data
    });
    
    return Taro.request({
      url: `${BASE_URL}/api/v1/users/login`,
      method: 'POST',
      data: {
        code: data.code,
        avatarUrl: data.avatarUrl,
        nickName: data.nickName
      },
      timeout: 60000,  // 增加到60秒
      enableHttp2: false,
      enableQuic: false,
      enableCache: false,
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log('登录响应:', res);
      return res;
    }).catch(err => {
      console.error('登录请求失败:', {
        error: err,
        errorMessage: err.errMsg,
        requestTask: err.requestTask
      });
      throw err;
    });
  },

  getProfile: () => 
    Taro.request<UserInfo>({
      url: `${BASE_URL}/api/v1/users/profile`,
      header: {
        'Authorization': `Bearer ${Taro.getStorageSync('token')}`
      }
    })
}

// 头像生成相关接口
export const avatarApi = {
  uploadImage: (filePath: string) => 
    Taro.uploadFile({
      url: `${BASE_URL}/api/v1/upload`,
      filePath,
      name: 'file',
      header: {
        'Authorization': `Bearer ${Taro.getStorageSync('token')}`
      }
    }),

  updateStyle: (imageId: string, styleId: string) =>
    Taro.request({
      url: `${BASE_URL}/api/v1/avatar/style`,
      method: 'POST',
      data: {
        imageId,
        styleId
      },
      header: {
        'Authorization': `Bearer ${Taro.getStorageSync('token')}`
      }
    }),


  updateParams: async (taskId: string, params: any): Promise<AvatarResponse> => {
    const res = await Taro.request({
      url: `${BASE_URL}/api/avatar/${taskId}/params`,
      method: 'PUT',
      data: params
    })
    return res.data
  },

  generate: async (taskId: string, params: any): Promise<AvatarResponse> => {
    const res = await Taro.request({
      url: `${BASE_URL}/api/avatar/${taskId}/generate`,
      method: 'POST',
      data: params
    })
    return res.data
  },
  
  getTaskResult: async (taskId: string): Promise<AvatarResponse> => {
    const res = await Taro.request({
      url: `${BASE_URL}/api/v1/avatars/result/${taskId}`,
      method: 'GET',
      header: {
        'Authorization': `Bearer ${Taro.getStorageSync('token')}`
      }
    })
    return res.data
  },
}

// 会员相关接口
export const memberApi = {
  getMemberInfo: () =>
    Taro.request<MemberInfo>({
      url: `${BASE_URL}/api/v1/members/info`,
      header: {
        'Authorization': `Bearer ${Taro.getStorageSync('token')}`
      }
    }),

  subscribe: (memberType: number) =>
    Taro.request({
      url: `${BASE_URL}/api/v1/members/subscribe`,
      method: 'POST',
      data: { memberType },
      header: {
        'Authorization': `Bearer ${Taro.getStorageSync('token')}`
      }
    })
}

// 上传图片
export const uploadImage = (filePath: string) => {
  return Taro.uploadFile({
    url: `${BASE_URL}/api/v1/avatars/upload`,
    filePath,
    name: 'file',
    header: {
      'Authorization': `Bearer ${Taro.getStorageSync('token')}`
    }
  })
}

// 更新风格
export const updateStyle = (imageId: string, styleId: string) => {
  return Taro.request({
    url: `${BASE_URL}/api/v1/avatars/style`,
    method: 'POST',
    data: {
      imageId,
      styleId
    },
    header: {
      'Authorization': `Bearer ${Taro.getStorageSync('token')}`
    }
  })
}

// 生成头像
export const generateAvatar = (url: string,styleType: string) => {
  return Taro.request({
    url: `${BASE_URL}/api/v1/avatars/generate`,
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${Taro.getStorageSync('token')}`
    },
    data: `url=${encodeURIComponent(url)}&styleType=${encodeURIComponent(styleType)}`
  })
}

// 获取生成结果
export const getAvatarResult = (taskId: string) => {
  return Taro.request({
    url: `${BASE_URL}/api/v1/avatar/result/${taskId}`,
    method: 'GET',
    header: {
      'Authorization': `Bearer ${Taro.getStorageSync('token')}`
    }
  })
} 