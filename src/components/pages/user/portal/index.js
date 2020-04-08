import React, { Component } from 'react'
import Header from '../../../general/header'
import {MdAccountBalance} from 'react-icons/md'
import {FaPencilAlt, FaUserAstronaut} from 'react-icons/fa'
import {TiCalendar} from 'react-icons/ti';

import { userPortalHeaderElements } from '../../../../utils/constants'
import './style.css'

class UserPortal extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return (
            <div className='user-portal'>
                <Header headerComponents={userPortalHeaderElements}></Header>
                <ul>
                    <li>
                        <MdAccountBalance size={50} className='icon' ></MdAccountBalance>
                        <p>Fisco Facil</p>
                    </li>

                    <li>
                        <FaPencilAlt size={50} className='icon' ></FaPencilAlt>
                        <p>Portal do Usuário</p>
                    </li>

                    <li>
                        <FaUserAstronaut size={50} className='icon' color=''></FaUserAstronaut>
                        <p>Portal do Contador</p>
                    </li>
                    
                    <li>
                        <TiCalendar size={50} className='icon' ></TiCalendar>
                        <p>Agenda Fiscal</p>
                    </li>

                </ul>
            </div>
        )
    }
}

export default UserPortal;
