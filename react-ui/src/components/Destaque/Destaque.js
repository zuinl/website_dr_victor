import React from 'react'

import '../../css/App.css'
import './style.css'

import config from '../../config'

export default props => {
    return (
        <div className="destaque-background">
            <div className="row">
                <div className="col-12 right">
                    <div className="destaque-box">
                        <p className="destaque-name">{config.name}</p>
                        <p className="destaque-oab">{config.oab}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}