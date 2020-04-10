import React, { Component } from 'react'
import Forms from '../../../../../general/forms'
import {formRegisterCertificate} from '../../../../../../utils/constants/forms'
import './style.css'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }

  render() {
    return(
      <div>
          <Forms formData={formRegisterCertificate}></Forms>
      </div>
    )
  }
}

export default Register;
