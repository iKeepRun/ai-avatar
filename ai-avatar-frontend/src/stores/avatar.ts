import { makeAutoObservable } from 'mobx'

class AvatarStore {
  taskId: string = ''
  originalImage: string = ''
  previewImage: string = ''

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
}

export default AvatarStore 