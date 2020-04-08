import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'

import Portal from './components/pages/portal'
import LogIn from './components/pages/logIn'

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
            </Switch>
        </BrowserRouter>
      )
    }
  }
  
  export default Routes;