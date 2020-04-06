import React, { Component } from 'react'
import { getAll } from '../../../services/solutions'
import './style.css'

class Solutions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiSolutions: [],
        }

    }

    async componentDidMount() {
        const apiSolutions = await getAll()

        this.setState({ apiSolutions })
    }

    render() {
        return (
            <div className='solutions-container' id='solucoes'>
                <h1>Nossas soluções para seu negócio:</h1>
                <ul className='ul-resume'>
                    {this.state.apiSolutions.map((solution, index) => {
                        return (
                            <li key={index} className='solution-instance'>
                                <div className='resume'>
                                    <div className='information'>
                                        <h1>{solution.title}</h1>
                                        <p>{solution.text}</p>
                                    </div>
                                    <img alt={`icone ${solution.title}`} src={`data:image/png;base64,${solution.icon.base_64}`}></img>
                                </div>
                                <ul>
                                    {solution.details.map((detail, k) => {
                                        return (
                                            <li className='detail' key={k} style={{
                                                flexDirection: k % 2 === 0 ? 'row-reverse' : 'row'
                                            }}>
                                                <img className='detail-img' alt={`imagem ${detail.title}`} src={`data:image/png;base64,${detail.image.base_64}`}></img>
                                                <div className='detail-information'>
                                                    <h2>{detail.title}</h2>
                                                    <p>{detail.text}</p>
                                                </div>

                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
}

export default Solutions;
