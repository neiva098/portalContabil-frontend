import { MdLibraryBooks } from 'react-icons/md'
import React from 'react'
import logo from '../../assets/lagarto.svg'
import problemsImg from '../../assets/solucao-de-problemas.svg'

const defaultChangeStateMethod = (component, e) => {
    component.setState({ [e.target.name]: e.target.value })
}

export const formRegisterRoot = {
    id: 'register',
    submitDescription: 'Cadastrar',
    state: {
        userName: '',
        email: '',
        password: '',
        enterpriseName: '',
        phone: ''
    },
    onSubmit: async (component, event) => undefined,
    info: {
        image: <img src={logo} alt='Be frog' className='image'></img>,
        title: 'Quem é você',
        description: 'Queremos saber quem é você para prosseguirmos com o cadastro, complete os campos ao lado!',
        backLink: {
            to: '/',
            description: 'Voltar para Home'
        }
    },
    inputs: (component) => [
        <input placeholder='Seu nome' name='userName' value={component.state.userName}  onChange={(e) => defaultChangeStateMethod(component, e)} ></input>,
        <input placeholder='Seu e-mail' name='email' type='email' value={component.state.email}  onChange={(e) => defaultChangeStateMethod(component, e)} ></input>,
        <input placeholder='Sua senha' name='password' type='password' value={component.state.password}  onChange={(e) => defaultChangeStateMethod(component, e)} ></input>,
        <input placeholder='Seu telefone' name='phone' value={component.state.phone}  onChange={(e) => defaultChangeStateMethod(component, e)} ></input>,
        <input placeholder='O nome da sua empresa' name='enterpriseName' value={component.state.enterpriseName}  onChange={(e) => defaultChangeStateMethod(component, e)} ></input>
    ]
}

export const formRegisterCertificate = {
    id: 'register-certificate',
    submitDescription: 'Cadastrar',
    state: {
        enterpriseNumber: '',
        interval: '',
        password: '',
        certs: [],
    },
    onSubmit: async (component, event) => undefined,
    info: {
        image: <MdLibraryBooks size={150} className='icon' ></MdLibraryBooks>,
        title: 'Cadastre seu Certificado',
        description: 'Para incluir seu certificado necessitamos das seguintes informações.',
        backLink: {
            to: '/',
            description: 'Voltar ao Fisco Facil'
        }
    },
    inputs: (component) => [
        <input placeholder='Número da empresa' name='enterpriseNumber' value={component.state['enterpriseNumber']} onChange={(e) => defaultChangeStateMethod(component, e)} ></input>,
        <input placeholder='Intervalo de verificação automática' name='interval' value={component.state['interval']} onChange={(e) => defaultChangeStateMethod(component, e)} ></input>,
        <input placeholder='Senha do certificado' name='password' type='password' value={component.state['password']} onChange={(e) => defaultChangeStateMethod(component, e)} ></input>,
        <label className='upload-label'>
            <input type='file' class='upload-button' name='certs' value={component.state['certs']} multiple onChange={(e) => defaultChangeStateMethod(component, e)} />
            Arquivos
        </label>
    ]
}

export const formDude = {
    id: 'ajuda',
    submitDescription: 'Enviar',
    state: {
        name: '',
        email: '',
        telefone: '',
        empresa: '',
        duvida: ''
    },
    onSubmit: async (component, event) => undefined,
    info: {
        image: <img src={problemsImg} alt='Dude' className='image'></img>,
        title: 'Tem alguma duvida?',
        description: 'Entre em contato com nosso time e em breve lhe responderemos, caso deseje nosso contato é +55 31 XXXXXXXXX.',
    },
    inputs: (component) => [
        <input placeholder='*Seu nome' name='name' value={component.state.name} onChange={(e) => defaultChangeStateMethod(component, e)} required={true}></input>,
        <input type='email' placeholder='*Seu e-mail' name='email' value={component.state.email} onChange={(e) => defaultChangeStateMethod(component, e)} required={true}></input>,
        <input placeholder='Seu telefone' name='telefone' value={component.state.telefone} onChange={(e) => defaultChangeStateMethod(component, e)}></input>,
        <input placeholder='Sua empresa' name='empresa' value={component.state.empresa} onChange={(e) => defaultChangeStateMethod(component, e)}></input>,
        <textarea placeholder='*Digite aqui a sua dúvida' name='duvida' value={component.state.duvida} onChange={(e) => defaultChangeStateMethod(component, e)} required={true}></textarea>
    ]
}