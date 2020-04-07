import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import Menu from '../sideMenu'
import { HashLink } from 'react-router-hash-link'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonsStyle: {
                opacity: 1,
                visibility: 'visible'
            },
        }
        this.updateHeader = this.updateHeader.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateHeader);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateHeader);
    }

    updateHeader() {
        const LIMIT = 580
        const buttonsStyle = { ...this.state.buttonsStyle }

        if (window.innerWidth < LIMIT && buttonsStyle.visibility === 'visible') {
            return this.setState({
                buttonsStyle: {
                    visibility: 'hidden',
                    opacity: 0,
                }
            })
        } else {
            if (window.innerWidth > LIMIT && buttonsStyle.visibility !== 'visible') {
                return this.setState({
                    buttonsStyle: {
                        visibility: 'visible',
                        opacity: 1,
                    }
                })
            }
        }
    }

    render() {
        return (
            <header>
                <Menu menuElements={this.props.headerComponents.menuElements}></Menu>
                {
                    this.props.headerComponents.headerButtons.map((item, index) => 
                        <HashLink className='button' key={index} smooth to={item.link} style={this.state.buttonsStyle}>{item.text}</HashLink>
                )}
            </header>
        )
    }
}

export default Header;
