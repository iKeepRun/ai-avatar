import { makeAutoObservable } from 'mobx'

class UserStore {
  isVip: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setIsVip(vip: boolean) {
    this.isVip = vip
  }
}

export default UserStore