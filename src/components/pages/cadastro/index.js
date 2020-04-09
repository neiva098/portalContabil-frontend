import React, { Component } from 'react'
import Planos from '../planos'
import Register from '../../general/register'
import Header from '../../general/header'
import './style.css'
import {cadastroHeaderElements} from '../../../utils/constants/header'

class Cadastro extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div className='cadastro-container'>
        <Header headerComponents={cadastroHeaderElements}></Header>
        <Planos></Planos>
        <Register></Register>
      </div>
    )
  }
}

export default Cadastro;
