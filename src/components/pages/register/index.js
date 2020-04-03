import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './style.css'
import logoImg from '../../../assets/lagarto.svg'
import api from '../../../services/api'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      whatsapp: '',
      city: '',
      uf: ''
    }
    this.changeState = this.changeState.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }
  async handleRegister(e) { 
    e.preventDefault()
    
    const res = await api.post('/ongs/', this.state, {
      validateStatus: () => true
    })
    const { id } = res.data
    if (id) {
      alert(`Seu id é ${id}`)
      return this.props.history.push('/')
    }

    return alert(`Seu cadastro falhou! : (`)
  }

  changeState(e) {
    this.setState({[e.target.name]: e.target.value})
  } 

  render() {
    return(
      <div className='register-container'>
        <div className='content'>
            <section>
                  <img src={logoImg} alt='Be the Hero'></img>
                  <h1>Cadastro</h1>
                  <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                  <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color='#E02041'/>
                    Tenho cadastro
                  </Link>
            </section>
            
            <form onSubmit={async (e) => {
              await this.handleRegister(e)
            }}>
              <input placeholder='Nome da ONG' name='name' value={this.state.name} onChange={this.changeState}></input>
              <input type='email' placeholder='E-mail' name='email' value={this.state.email} onChange={this.changeState}></input>
              <input placeholder='Whatsapp' name='whatsapp' value={this.state.whatsapp} onChange={this.changeState}></input>
              <div className='input-group'>
                <input placeholder='Cidade' name='city' value={this.state.city} onChange={this.changeState}></input>
                <input placeholder='Uf' style={{width: 80}} name='uf' value={this.state.uf} onChange={this.changeState}></input>
              </div>
              <button className='button' type='submit'>Cadastrar</button>
            </form>
        </div>
      </div>
    ) 
  }
}

export default withRouter(Register)