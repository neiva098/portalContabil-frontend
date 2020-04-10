import React, { Component } from 'react'
import Forms from '../../general/forms'
import {formRegisterRoot} from '../../../utils/constants/forms'

import './style.css'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Forms formData={formRegisterRoot}></Forms>
      ) 
  }
}

export default Register
