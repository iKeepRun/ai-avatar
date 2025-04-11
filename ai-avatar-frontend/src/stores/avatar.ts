import { makeAutoObservable } from 'mobx'

class AvatarStore {
  taskId: string = ''
  originalImage: string = ''
  previewImage: string = ''
  currentStyle: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setTaskId(taskId: string) {
    this.taskId = taskId
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
}

export default AvatarStore 