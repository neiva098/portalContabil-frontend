import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './style.css'

class Modules extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(this.props.modules)
    }

    render() {
        return (
            <div className='modules-container'>
                <ul>
                    {
                        this.props.modules.map(module => {
                            return (
                                <li onClick={async () => await module.action(this)}>
                                    {module.icon}
                                    <p>{module.title}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(Modules);
