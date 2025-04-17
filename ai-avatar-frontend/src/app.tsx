import { Component } from 'react'
import { PropsWithChildren } from 'react'
import { configure } from 'mobx'
import './app.scss'
import { StoreContext, stores } from './stores'

configure({ enforceActions: 'never' })

class App extends Component<PropsWithChildren<any>> {
  componentDidMount() {
    console.log('App mounted.')
  }

  componentDidShow() {
    console.log('App shown.')
  }

  componentDidHide() {
    console.log('App hidden.')
  }

  render() {
    return (
      <StoreContext.Provider value={stores}>
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export default App 