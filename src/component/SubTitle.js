import React, { Component } from 'react'
import {List, Button, Grid} from 'antd-mobile'

class SubTitle extends Component {

  constructor(props){
    super(props)
    this.state={authorList:props.num}
  }
  componentWillMount () {
    console.log('subTitle')
  }

  componentDidMount () {
    console.log('did render subtitle!')
  }
  componentWillReceiveProps () {
    this.setState({authorList:this.props.num})
    console.log('receive props')
  }

  deleteAuthor= (index)=> {
    console.log('delete')
    this.setState({authorList:[1]})
  }

  render () {
    console.log('render subtitle!')
    return (
      <List renderHeader={() => 'Author List'}>
        {
          this.state.authorList.map(n => {
            return (
              <div>
                <tr>
                  <td> <List.Item key={n}>zhaohui{n} {this.props.author}</List.Item></td>
                  <td> <Button key={n} type='danger' onClick={this.deleteAuthor}>delete</Button></td>
                </tr>
              </div>
            )
          }
          )
        }
      </List>
    )
  }
}

export default SubTitle
