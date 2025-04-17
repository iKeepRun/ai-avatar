import { makeAutoObservable } from 'mobx'

class AvatarStore {
  taskId: string = ''
  originalImage: string = ''
  previewImage: string = ''
  currentStyle: string = '' 
  taskStatus: string = ''
  cosImageUrl: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setTaskId(id: string) {
    this.taskId = id
  }

  setOriginalImage(url: string) {
    this.originalImage = url
  }

  setPreviewImage(url: string) {
    this.previewImage = url
  }

  setCurrentStyle(style: string) {
    this.currentStyle = style
  }
  // 更新任务状态
  updateTaskStatus(status: string) {
    this.taskStatus = status
  }
  setCosImageUrl(url: string) {
    this.cosImageUrl = url
  }
}

export default AvatarStore 