import React, { Component } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import './style.css'
import { HashLink } from 'react-router-hash-link'

class Planos extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='planos-container' id='planos'>
                <h1>Escolha seu Plano:</h1>
                <ul>
                    <li>
                        <h2>Nome do Plano</h2>
                        <p className='valor'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(5000)} <strong>/mês</strong></p>
                        <h3>Sobre o Plano:</h3>
                        <p className='text-description'>texto de decrição</p>
                        <HashLink className='check-plan' smooth to='/cadastro/#register'>
                            <FiCheckCircle size={20} ></FiCheckCircle>
                        </HashLink>
                    </li>

                    <li>
                        <h2>Nome do Plano</h2>
                        <p className='valor'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(5000)} <strong>/mês</strong></p>
                        <h3>Sobre o Plano:</h3>
                        <p className='text-description'>texto de decrição</p>
                        <HashLink className='check-plan' smooth to='/cadastro/#register'>
                            <FiCheckCircle size={20} ></FiCheckCircle>
                        </HashLink>
                    </li>

                    <li>
                        <h2>Nome do Plano</h2>
                        <p className='valor'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(5000)} <strong>/mês</strong></p>
                        <h3>Sobre o Plano:</h3>
                        <p className='text-description'>texto de decrição</p>
                        <HashLink className='check-plan' smooth to='/cadastro/#register'>
                            <FiCheckCircle size={20} ></FiCheckCircle>
                        </HashLink>
                    </li>

                    <li>
                        <h2>Nome do Plano</h2>
                        <p className='valor'>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(5000)} <strong>/mês</strong></p>
                        <h3>Sobre o Plano:</h3>
                        <p className='text-description'>texto de chama texto de chama texto de chama texto de chama texto de chama texto de chama texto de chama texto de chama</p>
                        <HashLink className='check-plan' smooth to='/cadastro/#register'>
                            <FiCheckCircle size={20} ></FiCheckCircle>
                        </HashLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Planos;
