export interface UserInfo {
  id: string;
  nickname: string;
  avatarUrl: string;
  isVip: boolean;
  vipExpireTime?: string;
}

export interface MemberInfo {
  id: string;
  userId: string;
  memberType: number;
  expireTime: string;
  status: number;
  createTime: string;
  updateTime: string;
}

export interface AvatarResponse {
  code: number;
  success:boolean;
  message?: string;
  data: any;
} 