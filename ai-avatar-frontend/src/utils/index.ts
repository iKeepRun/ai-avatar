// 日期格式化
export const formatDate = (date: Date | string | number, format = 'YYYY-MM-DD HH:mm:ss') => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hour = String(d.getHours()).padStart(2, '0')
  const minute = String(d.getMinutes()).padStart(2, '0')
  const second = String(d.getSeconds()).padStart(2, '0')

  return format
    .replace('YYYY', String(year))
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hour)
    .replace('mm', minute)
    .replace('ss', second)
}

// 文件大小格式化
export const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`
}

// 防抖函数
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
) => {
  let timeout: NodeJS.Timeout | null = null
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout)
    
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

// 节流函数
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
) => {
  let previous = 0
  
  return function(this: any, ...args: Parameters<T>) {
    const now = Date.now()
    if (now - previous > wait) {
      func.apply(this, args)
      previous = now
    }
  }
}

// 深拷贝
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj
  
  if (obj instanceof Date) return new Date(obj.getTime()) as any
  
  if (obj instanceof Array) {
    return obj.reduce((arr, item, i) => {
      arr[i] = deepClone(item)
      return arr
    }, [] as any)
  }
  
  if (obj instanceof Object) {
    return Object.keys(obj).reduce((newObj, key) => {
      newObj[key] = deepClone((obj as any)[key])
      return newObj
    }, {} as any)
  }
  
  return obj
}

// 图片压缩
export const compressImage = async (path: string, quality = 80) => {
  try {
    const res = await Taro.compressImage({
      src: path,
      quality
    })
    return res.tempFilePath
  } catch (error) {
    console.error('图片压缩失败', error)
    return path
  }
}

// 检查权限
export const checkPermission = async (scope: string) => {
  try {
    const res = await Taro.getSetting()
    return res.authSetting[scope]
  } catch (error) {
    console.error('检查权限失败', error)
    return false
  }
}

// 获取设备信息
export const getSystemInfo = async () => {
  try {
    return await Taro.getSystemInfo()
  } catch (error) {
    console.error('获取设备信息失败', error)
    return null
  }
} 