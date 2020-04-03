import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { handleChangeImage } from './utils/slide'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import './style.css'
import logoImg from '../../../assets/lagarto.svg'

class Portal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imagesBase64: [],
            imageIndex: 0,
            headerElementsStyle: {
                opacity: 1,
                visibility: 'visible'
            }
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                imageIndex: handleChangeImage(this.state.imageIndex, this.state.imagesBase64.length),
            })
        }, 10000)
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        const headerElementsStyle ={... this.state.headerElementsStyle}

        if (window.innerWidth < 520 && headerElementsStyle.visibility === 'visible') {
            headerElementsStyle.visibility = 'hidden'
            headerElementsStyle.opacity = 0
            return this.setState({ headerElementsStyle })
        } else {
            if (window.innerWidth > 520) {
                headerElementsStyle.visibility = 'visible'
                headerElementsStyle.opacity = 1
                return this.setState({ headerElementsStyle })
            }
        }
    }

    handleArrowImage(direction) {
        switch (direction) {
            case 'left':
                this.setState({ imageIndex: this.state.imageIndex - 1 })
                break
            case 'right':
                this.setState({ imageIndex: this.state.imageIndex + 1 })
                break
        }
    }

    render() {
        return (
            <div className='profile-container'>
                <header>
                    <img src={logoImg} alt='Be largato'></img>
                    <Link className='button' to='/logIn' style={this.state.headerElementsStyle}>Acesse sua Conta</Link>
                    <Link className='button' to='/planos' style={this.state.headerElementsStyle}>Planos</Link>
                    <Link className='button' to='/solucoes' style={this.state.headerElementsStyle}>Soluções</Link>
                    <Link className='button' to='help ' style={this.state.headerElementsStyle}>Ajuda</Link>
                </header>
                <div className='slide-container' style={{
                    backgroundImage: `url('data:image/jpeg;base64,/${this.state.imagesBase64[this.state.imageIndex]}')`,
                }}>
                    <FiArrowLeft id='left' className='button' size={5} onClick={() => this.handleArrowImage('left')}></FiArrowLeft>
                    <FiArrowRight id='right' className='button' size={5} onClick={() => this.handleArrowImage('right')}></FiArrowRight>
                </div>
            </div>
        )
    }
}

export default Portal;
