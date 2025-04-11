import { createContext, useContext } from 'react'
import AvatarStore from './avatar'   
import UserStore from './user' 

export const stores = {
  avatarStore: new AvatarStore(),
  userStore: new UserStore()
}

export const StoreContext = createContext(stores)

export const useStore = () => useContext(StoreContext)