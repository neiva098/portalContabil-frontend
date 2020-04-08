import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './style.css'
import logo from '../../../assets/lagarto.svg'
import developerImg from '../../../assets/developer.png'
import { FiLogIn } from 'react-icons/fi'

class LogIn extends Component{
  constructor(props){
    super(props)
    this.state = {
      user: '',
      password: ''
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(e) {
    this.setState({[e.target.name]: e.target.value})
  } 

  render() {
    return(
      <div className='login-container'>
          <section className='form'>
              <img src={logo} alt='Be the Frog'></img>
              <form>
                <h1>Faça seu logIn</h1>
                <input placeholder='Seu usuário'  type='email' name='user' value={this.state.user} onChange={this.changeState}></input>
                <input placeholder='Sua senha' type='password' name='password' value={this.state.password} onChange={this.changeState}></input>
                <button type='submit' className='button'>Entrar</button>

                <Link to='/cadastro' className='back-link'>
                    Não tenho Cadastro
                    <FiLogIn size={16} color='#E02041'/>
                </Link>
  
              </form>
          </section>
          <img src={developerImg} alt='developer'></img>
      </div>
    )
  }
}

export default withRouter(LogIn);
