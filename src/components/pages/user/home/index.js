import React, { Component } from 'react'
import Header from '../../../general/header'
import ModulesComponent from '../../../general/modules'
import {homeModules} from '../../../../utils/constants/module'


import { userPortalHeaderElements } from '../../../../utils/constants/header'
import './style.css'



class UserHome extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return (
            <div className='user-home'>
                <Header headerComponents={userPortalHeaderElements}></Header>
                <ModulesComponent modules={homeModules}></ModulesComponent>
            </div>
        )
    }
}

export default UserHome;
