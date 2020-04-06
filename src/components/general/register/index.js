import React, { Component } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../../assets/lagarto.svg'
import './style.css'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      userName: '',
      email: '',
      password: '',
      enterpriseName: '',
      phone: ''
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
        <div className='register-container'>
          <div className='content' id='register'>
              <section>
                    <img src={logo} alt='Be frog'></img>
                    <h1>Quem é você</h1>
                    <p>Queremos saber quem é você para prosseguirmos com o cadastro, complete os campos ao lado!.</p>
                    <Link className='back-link' to='/'>
                      <FiArrowLeft size={16} color='#E02041'/>
                      Voltar para home
                    </Link>
              </section>
              
              <form onSubmit={async (e) => await this.handleSubmit(e)}>
                <input placeholder='Seu nome' name='userName' value={this.state.userName} onChange={this.changeState} ></input>
                <input placeholder='Seu e-mail' name='email' type='email' value={this.state.email} onChange={this.changeState} ></input>
                <input placeholder='Sua senha' name='password' type='password' value={this.state.password} onChange={this.changeState} ></input>
                <input placeholder='Seu telefone' name='phone'  value={this.state.phone} onChange={this.changeState} ></input>
                <input placeholder='O nome da sua empresa' name='enterpriseName'  value={this.state.enterpriseName} onChange={this.changeState} ></input>
                <button className='button' type='submit'>Cadastrar</button>
              </form>
          </div>
        </div>
      ) 
  }
}

export default withRouter(Register);
