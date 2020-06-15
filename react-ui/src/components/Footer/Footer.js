import React from 'react'

import '../../css/App.css'
import './style.css'
import WhatsAppLogo from '../../assets/img/whatsapp.png'
import InstagramLogo from '../../assets/img/instagram.png'

import config from '../../config'
import server from '../../server'

import axios from 'axios'

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            isSending: false
        }

        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPhoneChange = this.onPhoneChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
    }

    validate = () => {
        if(this.state.name.trim() === "") {
            alert('Por favor, insira seu nome')
            return false
        }
        else if(this.state.email.trim() === "") {
            alert('Por favor, insira seu e-mail')
            return false
        }
        else if(this.state.phone.trim() === "") {
            alert('Por favor, insira seu telefone')
            return false
        }
        else if(this.state.message.trim() === "") {
            alert('Por favor, insira uma mensagem')
            return false
        }
        
        return true
    }

    onNameChange = event => this.setState({ name: event.target.value })

    onEmailChange = event => this.setState({ email: event.target.value })

    onPhoneChange = event => this.setState({ phone: event.target.value })

    onMessageChange = event => this.setState({ message: event.target.value })

    onSubmit = async () => {
        this.setState({ isSending: true })
        if(!this.validate()) {
            this.setState({ isSending: false })
            return
        }

        const message = `
            Nome: ${this.state.name}<br>
            Telefone: ${this.state.phone}<br>
            Mensagem: ${this.state.message}<br>`

        await axios.post(`${server}/sendMail`, {
            to: config.email,
            from: this.state.email,
            subject: 'Nova mensagem - Website',
            html: message
        })
        .then(res => {
            alert('Sua mensagem foi enviada com sucesso')
        })
        .catch(err => {
            alert('Houve um erro ao enviar sua mensagem')
        })

        this.setState({ isSending: false })
    }

    render() {
        return (
            <div className="footer-container" id="FaleComigo">
                <div className="row">
                    <div className="col-12">
                        <h1 className="footer-title">Fale <b>comigo</b></h1>
                    </div>
                </div>

                <div className="row center">
                    <div className="col-12">
                        <a href={"mailto:" + config.email} className="footer-link">{config.email}</a>
                        <p className="footer-text">Clique para enviar um e-mail</p>
                    </div>
                </div>
                <div className="row center">
                    <div className="col-12">
                        <a href={config.whatsappLink} target="_blank" rel="noopener noreferrer">
                            <img src={WhatsAppLogo} alt="WhatsApp" title="WhatsApp" width="30" />
                        </a>
                        <p className="footer-text">Clique para enviar uma mensagem</p>
                    </div>
                </div>
                <div className="row center">
                    <div className="col-12">
                        <a href={config.instagram} target="_blank" rel="noopener noreferrer">
                            <img src={InstagramLogo} alt="Instagram" title="Instagram" width="25" />
                        </a>
                        <p className="footer-text">Siga-me no Instagram</p>
                    </div>
                </div>

                <div className="row center">
                    <div className="col-12">
                        <label className="text footer-label">Seu nome</label>
                        <br />
                        <input type="text" className="input" onChange={this.onNameChange} />
                    </div>
                </div>
                <div className="row center">
                    <div className="col-12">
                        <label className="text footer-label">Seu e-mail</label>
                        <br />
                        <input type="email" className="input" onChange={this.onEmailChange} />
                    </div>
                </div>
                <div className="row center">
                    <div className="col-12">
                        <label className="text footer-label">Seu telefone</label>
                        <br />
                        <input type="text" className="input" onChange={this.onPhoneChange} />
                    </div>
                </div>
                <div className="row center">
                    <div className="col-12">
                        <label className="text footer-label">Mensagem</label>
                        <br />
                        <textarea className="input" onChange={this.onMessageChange} />
                    </div>
                </div>

                <div className="row center">
                    <div className="col-12">
                        <input type="submit" 
                        className="footer-button" 
                        value={this.state.isSending ? "Enviando..." : "Enviar"} 
                        disabled={this.state.isSending}
                        onClick={() => this.onSubmit()} />
                    </div>
                </div>
            </div>
        )
    }
}