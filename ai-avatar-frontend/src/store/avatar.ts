import { makeAutoObservable } from 'mobx'

export interface EditParams {
  faceRatio: number
  hairColor: string
  backgroundComplexity: number
}

export interface AvatarStore {
  originalImage: string
  currentStyle: string
  editingParams: EditParams
  generatedImage: string
  generateStatus: 'idle' | 'generating' | 'success' | 'error'
}

class AvatarStore {
  constructor() {
    makeAutoObservable(this)
  }

  setOriginalImage(image: string) {
    this.originalImage = image
  }

  setCurrentStyle(style: string) {
    this.currentStyle = style
  }

  updateEditingParams(params: Partial<EditParams>) {
    this.editingParams = { ...this.editingParams, ...params }
  }

  setGenerateStatus(status: AvatarStore['generateStatus']) {
    this.generateStatus = status
  }

  setGeneratedImage(image: string) {
    this.generatedImage = image
  }
}

export default new AvatarStore() 