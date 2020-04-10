import {MdAccountBalance, MdLibraryBooks } from 'react-icons/md'
import {FaUserAstronaut, FaUserAlt, FaTable} from 'react-icons/fa'
import {TiCalendar} from 'react-icons/ti'
import {GiTestTubes} from 'react-icons/gi'

import React from 'react'

export const homeModules = [
    {
        icon:  <MdAccountBalance size={50} className='icon' ></MdAccountBalance>,
        title: 'Fisco Facil',
        action: (component) => component.props.history.push('/fiscoFacil')
    },
    {
        icon: <FaUserAlt  size={50} className='icon' ></FaUserAlt>,
        title: 'Gerenciar Usuários',
        action: (component) => component.props.history.push('/')
    },
    {
        icon:  <FaUserAstronaut size={50} className='icon' color=''></FaUserAstronaut>,
        title: 'Portal do Contador',
        action: (component) => component.props.history.push('/fiscoFacil')
    },
    {
        icon:  <TiCalendar size={50} className='icon' ></TiCalendar>,
        title: 'Agenda Fiscal',
        action: (component) => component.props.history.push('/fiscoFacil')
    }
]

export const fiscoFacilModules = [
    {
        icon: <MdLibraryBooks  size={50} className='icon' ></MdLibraryBooks>,
        title: 'Gerenciar Certificados',
        action: (component) => component.props.history.push('/fiscoFacil/certificate/register')
    },
    {
        icon: <FaTable  size={50} className='icon' ></FaTable>,
        title: 'Relatórios',
        action: (component) => component.props.history.push('/')
    },
    {
        icon: <GiTestTubes  size={50} className='icon' ></GiTestTubes>,
        title: 'Verificar Pendencias Agora',
        action: (component) => component.props.history.push('/')
    }
]