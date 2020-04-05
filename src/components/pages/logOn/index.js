import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import api from '../../../services/api'
import './style.css'
import jokerImg from '../../../assets/funnyLogo.png'
import logoImg from '../../../assets/lagarto.svg'
import { FiLogIn } from 'react-icons/fi'

class LogIn extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      password: ''
    }
    this.changeState = this.changeState.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  async handleLogIn(e) {
    e.preventDefault()

    const { data: {name} } = await api.post('/sessions', this.state, { validateStatus: () => true})
  
    if (name) {
      localStorage.setItem('ongId', this.state.id)
      localStorage.setItem('ongName', name)
      return this.props.history.push('/profile')
    }
    alert('Id inválida')
  } 

  changeState(e) {
    this.setState({[e.target.name]: e.target.value})
  } 

  render() {
    return(
      <div className='logon-container'>
          <section className='form'>
              <img src={logoImg} alt='Be the Hero' className='logo'></img>
              <form onSubmit={this.handleLogIn}>
                <h1>Faça seu logIn</h1>
                <input placeholder='Seu Usuário' name='id' onChange={this.changeState}></input>
                <input type='password' placeholder='Sua Senha' name='password'  onChange={this.changeState}></input>
                <button type='submit' className='button'>Entrar</button>

                <Link to='/register' className='back-link'>
                    Não tenho Cadastro
                    <FiLogIn size={16} color='#E02041'/>
                </Link>
              </form>
          </section>
          <img src={jokerImg} alt='heroes' className='joker'></img>
      </div>
    )
  }
}

export default withRouter(LogIn);
