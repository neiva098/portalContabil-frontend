import React, { Component } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, withRouter } from 'react-router-dom'
import './style.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.formData.state
    }



    render() {
        return (
            <div className='form-container'>
                <div className='content' id={this.props.formData.id}>
                    <section>
                        {this.props.formData.info.image}
                        <h1>{this.props.formData.info.title}</h1>
                        <p>{this.props.formData.info.description}</p>
                        {this.props.formData.info.backLink && <Link className='back-link' to={this.props.formData.info.backLink.to}>
                            <FiArrowLeft size={16} color='#E02041' />
                            {this.props.formData.info.backLink.description}
                        </Link>}
                    </section>

                    <form onSubmit={async (e) => await this.props.formData.onSubmit(this, e)}>
                        {
                            this.props.formData.inputs(this)
                        }
                        <button className='button' type='submit'>{this.props.formData.submitDescription}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Form);
