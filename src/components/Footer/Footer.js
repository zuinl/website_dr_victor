import React from 'react'

import '../../css/App.css'
import './style.css'
import WhatsAppLogo from '../../assets/img/whatsapp.png'
import InstagramLogo from '../../assets/img/instagram.png'

import config from '../../config'

export default props => {
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
        </div>
    )
}