import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../../services/api'
import './style.css'
import logoImg from '../../../assets/lagarto.svg'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state = {
        incidents: [],
        ongName: localStorage.getItem('ongName'),
        ongId: localStorage.getItem('ongId')
    }
  }

  async handleDeleteIncident(id) {
    await api.delete(`/incidents/${id}`, {
      headers: {authorization: this.state.ongId}
    })

    const updatedIncidents = this.state.incidents.filter(incident => incident.id !== id)

    this.setState({incidents: updatedIncidents})
  }

   handleLogOut() {
     localStorage.clear()

     return this.props.history.push('/')
   }
  
  async componentDidMount() {
    const { data } = await api.get('/incidents/query', {headers: {authorization: this.state.ongId}})
    this.setState({incidents: data})
  }

  render() {
    return(
      <div className='profile-container'>
          <header>
              <img src={logoImg} alt='Be the Hero'></img>
              <span>Bem Vinda, {this.state.ongName}</span>
              <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
              <button type='button' onClick={() => this.handleLogOut()}>
                  <FiPower size={18} color='#E02041'/>
              </button>
          </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {
                    this.state.incidents.map((incident) => {
                        return (
                            <li key={incident.id}>
                                <strong>Caso:</strong>
                                <p>{incident.title}</p>

                                <strong>Descrição</strong>
                                <p>{incident.description}</p>

                                <strong>Valor</strong>
                                <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                                <button type='button' onClick={() => this.handleDeleteIncident(incident.id)}>
                                    <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
      </div>
    ) 
  }
}

export default withRouter(Profile);