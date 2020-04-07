import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import {portalHeaderElements} from '../../../utils/constants'
import './style.css'
import Header from '../../general/header'
import Slide from '../../general/slide'
import Planos from '../planos'
import Solutions from '../solutions'
import Dudes from '../../general/dudes'

class Portal extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className='portal-container'>
                <Header headerComponents={portalHeaderElements}></Header>
                <Slide></Slide>
                <Solutions></Solutions>
                <Planos></Planos>
                <Dudes></Dudes>
            </div>
        )
    }
}

export default withRouter(Portal);
