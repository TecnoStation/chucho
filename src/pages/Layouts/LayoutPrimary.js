import React from 'react'
import { Card } from 'antd'
import { Route } from 'react-router-dom'
import "./LayoutPrimary.scss"
import { useTranslation } from "react-i18next";


export default function LayoutPrimary({component: Component, ...rest}) {
    const [t, i18n] = useTranslation("global"); 

    return (
       <Route {...rest}>
            <div className="fondo">
                <Card title="" className="cardDefault" headStyle={{ textAling :"center"}} >
                     <Component />
                </Card>
               
            </div>
       </Route>
    )
}
