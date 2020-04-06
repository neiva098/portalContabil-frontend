import React, { Component } from 'react'
import {  withRouter } from 'react-router-dom'

import './style.css'
import problemsImg from '../../../assets/solucao-de-problemas.svg'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      telefone: '',
      empresa: '',
      duvida: ''
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(e) {
    this.setState({[e.target.name]: e.target.value})
  } 

  render() {
    return(
      <div className='dude-container' id='ajuda'>
        <h1>Tem alguma duvida?</h1>
        <div className='content'>
            <section>
                  <img src={problemsImg} alt='Dude'></img>
                  <p>Entre em contato com nosso time e em breve lhe responderemos, caso deseje nosso contato é +55 31 XXXXXXXXX.</p>
            </section>
            
            <form>
              <input placeholder='*Seu nome' name='name' value={this.state.name} onChange={this.changeState} required='true'></input>
              <input type='email' placeholder='*Seu e-mail' name='email' value={this.state.email} onChange={this.changeState} required='true'></input>
              <input placeholder='Seu telefone' name='telefone' value={this.state.telefone} onChange={this.changeState}></input>
              <input placeholder='Sua empresa' name='empresa' value={this.state.empresa} onChange={this.changeState}></input>
              <textarea placeholder='*Digite aqui a sua dúvida' name='duvida' value={this.state.duvida} onChange={this.changeState} required='true'></textarea>
              <button className='button' type='submit'>Enviar</button>
            </form>
        </div>
      </div>
    ) 
  }
}

export default withRouter(Register)