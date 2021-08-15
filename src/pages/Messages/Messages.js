import { Card, Col, Row } from "antd";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from '../../assets/img/avatar.png'
import { RiFilterFill } from "react-icons/ri";
import './Messages.scss'

export default function Messages() {
    const [dropdown, setDropdown] = useState('showInline principalColorText');
    const [dropright, setDropright] = useState('hide');
    const [cardvisible, setCardvisible] = useState('showBlock principalColorText')
  return (
    <>
      <Row>
          <Col span={17} style={{textAlign: "left", paddingLeft: "25px"}}>
              <Link to="#" className={dropdown} onClick={() => {setDropdown('hide'); setCardvisible('hide'); setDropright('showInline principalColorText');}} ><IoMdArrowDropdown
              style={{ fontSize: "20px", position: "absolute", left: "2px", top: "3px" , color: "#000" }}
            /><b>Validar estructuras</b></Link>
          
            <Link className={dropright} onClick={() => {setDropdown('showInline principalColorText'); setCardvisible('showBlock principalColorText'); setDropright('hide');}} to="#" ><IoMdArrowDropright 
               style={{ fontSize: "20px", position: "absolute", left: "2px", top: "3px" , color: "#000" }}
            /><b>Validar estructuras</b></Link>
          </Col>
        
        <Col className="iconBlue" span={7}>
        <span>Validar seleccionados | </span>
          <span>No Validar seleccionados</span>
        </Col>
      </Row>

      <Card className={cardvisible}>
        <Row>
          <Col span={11}>
            <p><b>Borrador</b></p>
          </Col>
          <Col span={6}>
            <p><b>Creado por</b></p>
          </Col>
          <Col span={4}>
            <p><b>Creación</b></p>
          </Col>
          <Col style={{textAlign: "center"}} span={3}>
            <p><b>Acciones</b></p>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <p>Estructura de la Sucursal Pachuca</p>
          </Col>
          <Col span={5} style={{paddingLeft: "20px"}}>
            <p><img alt="ico" width="30" src={Avatar} /></p>
          </Col>
          <Col style={{paddingLeft: "25px"}} span={5}>
            <p>MAR 31, 2021</p>
          </Col>
          
          <Col style={{paddingLeft: "10px"}} className="iconBlue" span={3}>
            <span>Validar | </span>
            <Link className="iconBlue" to="#"><span>No validar</span></Link>
          </Col>
        </Row>
      </Card>

      <Row style={{marginTop: "20px"}}>
          <Col span={15} style={{textAlign: "left", paddingLeft: "25px"}}>
              <Link to="#" className={dropdown} onClick={() => {setDropdown('hide'); setCardvisible('hide'); setDropright('showInline principalColorText');}} ><IoMdArrowDropdown
              style={{ fontSize: "20px", position: "absolute", left: "2px", top: "3px" , color: "#000" }}
            /><b>Validar habilidades de colaboradores</b></Link>
          
            <Link className={dropright} onClick={() => {setDropdown('showInline principalColorText'); setCardvisible('showBlock principalColorText'); setDropright('hide');}} to="#" ><IoMdArrowDropright 
               style={{ fontSize: "20px", position: "absolute", left: "2px", top: "3px" , color: "#000" }}
            /><b>Validar habilidades de colaboradores</b></Link>
          </Col>
          <Col span={1}><RiFilterFill /></Col>
          <Col span={1}></Col>
        <Col className="iconBlue" span={7}>
        <span>Validar seleccionados | </span>
          <span>No Validar seleccionados</span>
        </Col>
      </Row>

      <Card className={cardvisible}>
        <Row>
          <Col span={11}>
            <p><b>Borrador</b></p>
          </Col>
          <Col span={6}>
            <p><b>Creado por</b></p>
          </Col>
          <Col span={4}>
            <p><b>Creación</b></p>
          </Col>
          <Col style={{textAlign: "center"}} span={3}>
            <p><b>Acciones</b></p>
          </Col>
        </Row>

        <Row>
          <Col span={11}>
            <p>Estructura de la Sucursal Pachuca</p>
          </Col>
          <Col span={5} style={{paddingLeft: "20px"}}>
            <p><img alt="ico" width="30" src={Avatar} /></p>
          </Col>
          <Col style={{paddingLeft: "25px"}} span={5}>
            <p>MAR 31, 2021</p>
          </Col>
          
          <Col style={{paddingLeft: "10px"}} className="iconBlue" span={3}>
            <span>Validar | </span>
            <Link className="iconBlue" to="#"><span>No validar</span></Link>
          </Col>
        </Row>
      </Card>



      
    </>
  );
}
