import React, { Component } from 'react'
import Planos from '../planos'
import Register from '../../general/register'
import './style.css'

class Cadastro extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }

  render() {
    return(
      <div className='cadastro-container'>
        <Planos></Planos>
        <Register></Register>
      </div>
    )
  }
}

export default Cadastro;
