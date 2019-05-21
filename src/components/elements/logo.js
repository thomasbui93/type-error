import React from "react"
import logo from '../../images/logo.svg'

export default ({siteName}) => (
    <div className="logo">
        <div className="logo__start">
            <img src={logo} alt={siteName}/>
            <span>{siteName[0]}</span>
        </div>
        <div className="logo__remain">
            { siteName.slice(1)}
        </div>
    </div>
)