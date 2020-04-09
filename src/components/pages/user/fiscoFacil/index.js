import React, { Component } from 'react'
import Header from '../../../general/header'
import ModulesComponent from '../../../general/modules'
import {fiscoFacilModules} from '../../../../utils/constants/module'


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
            <div className='fiscoFacil-home'>
                <Header headerComponents={userPortalHeaderElements}></Header>
                <ModulesComponent modules={fiscoFacilModules}></ModulesComponent>
            </div>
        )
    }
}

export default UserHome;
