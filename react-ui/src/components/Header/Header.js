import React from 'react'

import '../../css/App.css'
import './style.css'

import config from '../../config'

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="row">
                    <div className="col-3">
                        <span className="header-name">{config.name}</span>
                    </div>
                    <div className="col-2 center">
                        <a href="#QuemSou"><span className="header-link">Quem sou</span></a>
                    </div>
                    <div className="col-3 center">
                        <a href="#Missao"><span className="header-link">Missão, Visão e Valores</span></a>
                    </div>
                    <div className="col-2 center">
                        <a href="#Atuacao"><span className="header-link">Área de atuação</span></a>
                    </div>
                    <div className="col-2 center">
                        <a href="#FaleComigo"><span className="header-link">Fale comigo</span></a>
                    </div>
                </div>
            </div>
        )
    }
}