import React from 'react'
import Logo from '../assets/img/Evou-color.png'
import { useTranslation } from "react-i18next";

export default function Nofound() {
    const [t, i18n] = useTranslation("global"); 
    return (
        <div>
            
            <img alt="logo" src={Logo} width="175" height="85"/>
                
            <h1>404</h1>
            <h2>Página no encontrada</h2>
        </div>
    )
}
