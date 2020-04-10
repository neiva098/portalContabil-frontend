import React, { Component } from 'react'
import {  withRouter } from 'react-router-dom'
import Forms from '../forms'
import {formDude} from '../../../utils/constants/forms'
import './style.css'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className='dude'>
        <h1>Precisando de ajuda?</h1>
        <Forms formData={formDude}></Forms>
      </div>
    ) 
  }
}

export default withRouter(Register)