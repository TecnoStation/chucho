import React from 'react'
import { Button, Col, Row } from 'antd'
import Pencil from '../../assets/img/iconos/edit-24px.svg'
import Delete from '../../assets/img/iconos/delete-24px.svg'

export default function Competencias(props) {
    const {data} = props;
     
    return (
        data.map((data,index) => 
        <Row key={index} id={'competencia' + index}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="rowSucursal" >
            <Col key={index} className="gutter-row nombresSucursal" style={{textAlign: "left", paddingLeft: "30px"}} span={14}>
                <span id={"nomCompe" + index}>{data.competencia}</span>
            </Col>
            <Col className="gutter-row direccionSucursal" span={4}>
                <span id={"nivel" + index} >{data.nivel}</span>
            </Col>

            <Col className="gutter-row" span={6}>
            
            <Button className="points"> <img alt="logo" onClick={(e) => props.myonClick(index,1,data,e)} src={Pencil} width="18" height="18" /></Button>
            <Button className="points"> <img alt="logo" onClick={(e) => props.myonClick(index,0,data,e)} src={Delete} width="18" height="18" /></Button>
            
            </Col>
        </Row>) 
        
        ) 
    
} 