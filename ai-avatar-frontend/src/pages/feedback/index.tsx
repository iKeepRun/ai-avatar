import { View, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import { request } from '@/services/request'
import { submitFeedback } from '@/services/api'
import './index.scss'

// 导入图片
import feedback from '@/assets/images/feedback.png'

// ... existing code ... 