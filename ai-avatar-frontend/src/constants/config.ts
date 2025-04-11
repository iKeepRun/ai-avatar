export const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8080'
  : 'https://api.example.com';

export const BASE_URL = 'http://localhost:8080';

export const UPLOAD_URL = `${API_BASE_URL}/api/v1/upload`;

export const MEMBER_TYPES = {
  MONTHLY: 1,
  YEARLY: 2
} as const;

export const AVATAR_STATUS = {
  PENDING: 0,
  COMPLETED: 1,
  FAILED: 2
} as const; 