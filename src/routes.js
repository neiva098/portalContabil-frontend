import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'

import Portal from './components/pages/portal'
import LogIn from './components/pages/logIn'
import UserHome from './components/pages/user/home'
import FiscoFacil from './components/pages/user/fiscoFacil'
import RegisterCertificate from './components/pages/user/fiscoFacil/certificate/register'

import Cadastro from './components/pages/cadastro'


class Routes extends Component{
    constructor(props){
      super(props)
      this.state = {
  
      }
  
    }
  
    render() {
      return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Portal}></Route>
                <Route path='/cadastro' component={Cadastro}></Route>
                <Route path='/logIn' component={LogIn}></Route>
                <Route path='/user/home' component={UserHome}></Route>
                <Route path='/fiscoFacil' exact component={FiscoFacil}></Route>
                <Route path='/fiscoFacil/certificate/register' component={RegisterCertificate}></Route>
            </Switch>
        </BrowserRouter>
      )
    }
  }
  
  export default Routes;