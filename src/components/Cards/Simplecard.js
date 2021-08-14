import React from 'react'
import { Col, Dropdown, Menu } from 'antd'
import { Link } from 'react-router-dom';
import More from '../../assets/img/iconos/more_vert-24px.svg'

import './Simplecard.scss'


export default function Simplecard(props) {
            
   const { equipos } = props;
   
    const menu =(
        
            <Menu>
              <Menu.Item key="0">
                <Menu.Item key="01"><Link onClick={() => props.clone()} to="#">Clonar equipo</Link></Menu.Item>
              </Menu.Item>
              <Menu.Item key="1">
                <Menu.Item key="12"><Link onClick={() => props.openModalRename()} to="#">Renombrar</Link></Menu.Item>
              </Menu.Item>
              <Menu.Item key="2">
                <Menu.Item key="23"><Link onClick={() => props.edit()} to="#">Editar</Link></Menu.Item>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="3">
                <Menu.Item key="34"><Link onClick={() => props.deleteTeam()} to="#">Eliminar</Link></Menu.Item>
              </Menu.Item>
            </Menu>
       
    )
    
    //console.log(equipos)

    return (

        equipos.map((data,index) =>
                <div className="Simplecard" id={data.id} key={index}>
                        <Col onClick={(e) => props.openModalTarget(index,data,e)} style={{cursor: "pointer"}} className="gutter-row" span={22} >
                            <h5 id="nombreTeam">{data.nombre}</h5>
                            <span>{data.subtitle}</span><br/>
                            <span>{data.fecha}</span>
                        </Col>
                        <Col className="gutter-row" span={2} >
                            <Dropdown overlay={menu} trigger={['click']}>
                                <Link to="#" className="ant-dropdown-link" id={index} onMouseEnter={(e) =>props.setDates(index,e)} onClick={(e) =>props.setDates(index,e)} ><img alt="logo" src={More} width="25" height="25" /></Link>               
                            </Dropdown>
                        </Col>
                </div>  
            )
      
       
    )
}
