export const BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://192.168.1.12:8080'  // 开发环境，使用HTTPS
  : 'https://api.example.com';  // 生产环境

export const UPLOAD_URL = `${BASE_URL}/api/v1/upload`;

export const MEMBER_TYPES = {
  MONTHLY: 1,
  YEARLY: 2
} as const;

export const AVATAR_STATUS = {
  PENDING: 0,
  COMPLETED: 1,
  FAILED: 2
} as const; 