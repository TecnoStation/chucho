import { Card } from "antd";
import React from "react";
import './Screen.scss'


export default function Screendefault({children}) {
    return (
        <div className="screen" id="screen">
            <Card title="" className="cardDefault" headStyle={{ textAlign : "center"}} >
                {children}
            </Card>
        </div>
    )
}
 