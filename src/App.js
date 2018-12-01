import React, { Component } from 'react'
import SubTitle from './component/SubTitle'
import {Button} from 'antd-mobile'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {num: [1, 2, 3], key: 4}
    this.addAutor = this.addAutor.bind(this)
    console.log('initial render!')
  }

  componentWillMount () {
    console.log('will render')
  }

  componentDidMount () {
    console.log('after render!')
  }

  componentWillUnmount () {
    console.log('finish!')
  }

  componentWillReceiveProps () {
    console.log('receive props')
  }

  shouldComponentUpdate () {
    console.log('check should render or not')
    return true
  }

  componentWillUpdate () {
    console.log('NAN')
  }

  componentDidUpdate () {
    console.log('after update')
  }

  render () {
    console.log('renderring!')
    return (
      <div className='App'>
        <h1>Secret project</h1>
        <SubTitle author='brant' num={this.state.num} />
        <Button type='primary' onClick={this.addAutor}>click</Button>
      </div>
    )
  }

  addAutor () {
    console.log('new name')
    this.setState({
      num: [...this.state.num, this.state.key]
    })
    this.setState({
      key: this.state.key + 1
    })
  }
}

export default App
