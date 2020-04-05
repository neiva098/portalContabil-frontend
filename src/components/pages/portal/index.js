import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './style.css'
import Header from '../../general/header'
import Slide from '../../general/slide'
import Planos from '../planos'

class Portal extends Component {
    headerProps = {
        menuElements: [
            {
                link: '/logIn',
                text: 'LogIn'
            },
            {
                link: '/cadastro',
                text: 'Cadastro'
            },
            {
                link: '/servicos',
                text: 'Serviços'
            },
            {
                link: '/sobre',
                text: 'Contato'
            }
        ],
        headerButtons: [
            {
                link: '/logIn',
                text: 'Acesse sua Conta'
            },
            {
                link: '/planos',
                text: 'Planos'
            },
            {
                link: '/solucoes',
                text: 'Soluções'
            },
            {
                link: '/ajuda',
                text: 'Ajuda'
            },
        ]
    }

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className='profile-container'>
                <Header headerComponents={this.headerProps}></Header>
                <Slide></Slide>
                <Planos></Planos>
            </div>
        )
    }
}

export default withRouter(Portal);
