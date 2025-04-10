import { Component } from 'react'
import { PropsWithChildren } from 'react'
import { configure } from 'mobx'
import './app.scss'

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
    return this.props.children
  }
}

export default App 