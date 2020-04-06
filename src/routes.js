import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'

import Portal from './components/pages/portal'
import Planos from './components/pages/planos'
import Ajuda from './components/pages/dudes'

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
            </Switch>
        </BrowserRouter>
      )
    }
  }
  
  export default Routes;