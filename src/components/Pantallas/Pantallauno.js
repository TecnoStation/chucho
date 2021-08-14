import { Button } from 'antd'
import React from 'react'
//import Screendefault from '../../../components/Screens/Screendefault'

export default function Pantallauno(props) {
    return (
        <>
            {/* <Screendefault> */}
                <h3>¡Bien hecho!</h3>
                <h3>Ahora necesitamos conocer la cultura de tu empresa</h3>
                <br/>
                <p>El papel de la cultura organizacional es esencial, pues constituye un motor que permite a la organización caminar hacia un mismo lugar, ya que determina las acciones y actitudes que deben tomarse en consideración para lograr los objetivos.</p>
                <br/>
                <Button onClick={props.closeInfo} className="primary btn">Continuar</Button>
            {/* </Screendefault> */}
        </>
    )
}
