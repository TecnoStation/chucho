import React from 'react'
import { Card } from 'antd'
import { Route } from 'react-router-dom'
import "./LayoutPrimary.scss"


export default function LayoutPrimary({component: Component, ...rest}) {

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
