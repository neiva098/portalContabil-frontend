import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React, { Component } from 'react'

import LogIn from './components/pages/logOn'
import Register from './components/pages/register'
import Profile from './components/pages/profile'
import Portal from './components/pages/portal'
import NewIncident from './components/pages/newIncident'

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
                <Route path='/logIn' exact component={LogIn}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/incidents/new' component={NewIncident}></Route>
            </Switch>
        </BrowserRouter>
      )
    }
  }
  
  export default Routes;