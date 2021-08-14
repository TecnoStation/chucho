import React from 'react'
import { Button, Col, Row } from 'antd';
import More from '../../assets/img/iconos/more_vert-24px.svg'



export default function Sucursales(props) {
    const {data} = props;
        
      return(
        data.map((sucursal,index) => 
        <Row key={index} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="rowSucursal" >
            <Col className="gutter-row nombresSucursal" id="nombresSucursal" span={8}>
                <span>{sucursal.nombre}</span>
            </Col>
            <Col className="gutter-row direccionSucursal" id="direccionSucursal" span={12}>
                <span>{sucursal.direccion}</span>
            </Col>

            <Col className="gutter-row" span={4}>
            
            <Button className="points" style={{textAlign: "left"}}>
                <img alt="logo" src={More} width="25" height="25" />
            </Button>
            
            </Col>
        </Row>
        )
      )
    
    
}
