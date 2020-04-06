import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'

import Portal from './components/pages/portal'
import Planos from './components/pages/planos'

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
            </Switch>
        </BrowserRouter>
      )
    }
  }
  
  export default Routes;