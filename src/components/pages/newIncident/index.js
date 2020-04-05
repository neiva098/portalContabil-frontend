import React, { Component } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, withRouter } from 'react-router-dom'
import api from '../../../services/api'
import logoImg from '../../../assets/lagarto.svg'
import './style.css'

class NewIncidend extends Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      value: ''
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault()
    const ret = await api.post('/incidents', this.state, {
      headers: {authorization: localStorage.getItem('ongId')}
    })

    if (ret.data.id) {
      alert('Novo caso cadastrado')

      return this.props.history.push('/profile')
    }

    alert('Erro na inserção do caso!')
  }

  render() {
    return(
        <div className='new-incident-container'>
          <div className='content'>
              <section>
                    <img src={logoImg} alt='Be the Hero'></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>
                    <Link className='back-link' to='/profile'>
                      <FiArrowLeft size={16} color='#E02041'/>
                      Voltar para Home
                    </Link>
              </section>
              
              <form onSubmit={async (e) => await this.handleSubmit(e)}>
                <input placeholder='Titulo do Caso' name='title' value={this.state.title} onChange={this.changeState} ></input>
                <textarea placeholder='Descrição' name='description' value={this.state.description} onChange={this.changeState} ></textarea>
                <input placeholder='Valor em Reais' name='value' value={this.state.value} onChange={this.changeState} ></input>
                <button className='button' type='submit'>Cadastrar</button>
              </form>
          </div>
        </div>
      ) 
  }
}

export default withRouter(NewIncidend);
