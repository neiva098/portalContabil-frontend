import React, { Component } from 'react'
import './style.css'
import logo from '../../../assets/lagarto.svg'

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageStyle: {
                transform: 'rotate(0deg)'
            },

            listStyle: {
                display: 'none',
                opacity: 1
            },
        }
        this.handleMenuClick = this.handleMenuClick.bind(this)
    }

    handleMenuClick() {
        const imageStyle = { ...this.state.imageStyle }
        const listStyle = { ...this.state.listStyle }

        if (imageStyle.transform === 'rotate(0deg)') {
            imageStyle.transform = 'rotate(90deg)'
            listStyle.display = 'flex'
            listStyle.opacity = 1
        }
        else {
            imageStyle.transform = 'rotate(0deg)'
            listStyle.display = 'none'
            listStyle.opacity = 0
        }

        this.setState({ imageStyle, listStyle })
    }

    render() {
        return (
            <div className='menu'>
                <img src={logo} alt='Be largato' onClick={this.handleMenuClick} style={this.state.imageStyle}></img>
                <div className='menu-list'>
                    <ul className='list' style={this.state.listStyle}>
                        {this.props.menuElements.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className='button' href={item.link}>{item.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;
