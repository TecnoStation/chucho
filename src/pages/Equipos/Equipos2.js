import React, { useState } from 'react'
import { Button, Col, Input, Row, Select, Form, Modal, Checkbox } from 'antd';
import { IoMdAdd } from "react-icons/io";
import { SearchOutlined } from '@ant-design/icons';
import { BsFillGrid3X2GapFill, BsListUl } from "react-icons/bs";
import { RiFilterFill } from "react-icons/ri";
import Avatar from '../../assets/img/avatar.png';
import Simplecard from '../../components/Cards/Simplecard'
import { Link } from 'react-router-dom';
import './Equipos.scss';

const { Option } = Select;

export default function Equipos2() {

    const equipos = [
        {id: "1",
         nombre: "Equipo - Proyecto EVOU", 
         subtitle: "Mandos Medios", 
         fecha: "15-JUN-2021"
        },
        {id: "2",
         nombre: "Lupita y Oliver", 
         subtitle: "lalala", 
         fecha: "15-JUN-2021"
        }
    ];

    const [modalCreateTeam, setModalCreateTeam] = useState(false);
    const closeModalCreateTeam = () => {setModalCreateTeam(false);}
    const openModalCreateTeam = () => {setModalCreateTeam(true);}
    const sendCreateTeam = () => {setModalCreateTeam(false);}
    const ready = () => {alert('enviando datos');setModalCreateTeam(false);}

    const info = () => {
        return(
            <>
            <span><b>Actividad de la empresa:</b></span><br/>
            <span>Lorem Ipsum es simplemente el texto de relleno
            de las imprentas y archivos de texto. Lorem
            Ipsum ha sido el texto de relleno estándar de las
            industrias desde el año 1500</span>
            </>
        );
    }

    const showFrame = (dato) =>{
        if(dato === "1"){
            document.getElementById('frame').setAttribute('style', "display: flex;");
        }else{
            document.getElementById('frame').setAttribute('style', "display: none;");
        }
        
    }

    const [Item, setItem] = useState('');
   
    const [value, setValue] = useState('');

    const setDates = (item, e) => {     
        setItem(item);
        

        console.log("Item: " + Item);
        console.log("value: " + value);
    }

    const clone = () => {
        
        // equipos.push({id: "1", nombre: "Equipo - Proyecto EVOU", subtitle: "Mandos Medios", fecha: "15-JUN-2021"});
        // console.log(equipos);
    }

    const rename = () => {
        // console.log(equipos[Item].nombre);
        // equipos[Item].nombre = "jhjkhkh"
        // console.log(equipos[Item].nombre);
    }

    const edit = () => {

    }

    const deleteTeam = () => {


    }

    const [modalRename, setmodalRename] = useState(false);
    
    const closeModalRename = () => {
        setmodalRename(false);

    }

    const openModalRename = () => {       
        ///setmodalRename(true);
        //setValue(equipos[Item].nombre);
    //    let nameTeam = document.getElementById("nameTeam");
       
    //     var intent = setInterval(function(){ 
    //        if(nameTeam !== null){
    //         nameTeam.defaultValue = equipos[Item].nombre;
    //         clearInterval(intent);
    //        }else{ 
    //         let nameTeam = document.getElementById("nameTeam");   
    //         nameTeam.defaultValue = equipos[Item].nombre;
    //         clearInterval(intent);
    //     }
    //     }, 100);
        
    }


    const done = () => {

        // let nameTeam = document.getElementById("nameTeam");
        // console.log(nameTeam);  
        // nameTeam.value = equipos[Item].nombre;
    }

    const onchange = (value) => {
        console.log(value);
    }


    return (
        <>  
             <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
                <Col className="gutter-row iconGray" span={1}><RiFilterFill /></Col>
                <Col className="gutter-row iconGray rigth" span={1}><span><BsFillGrid3X2GapFill /></span></Col>
                <Col className="gutter-row iconGray" span={3} style={{textAlign: "left"}}><BsListUl className="dividerLeft" style={{ paddingLeft: "5px", fontSize: "20px"}} /></Col>
                <Col className="gutter-row" span={15}><Input style={{width: "200px", marginTop: "-5px"}} addonAfter={<SearchOutlined />} placeholder="Buscar puesto" /></Col>
                <Col className="gutter-row" span={4}><Button onClick={clone}>hhhklkjhl</Button><Button className="primaryB" onClick={openModalCreateTeam} style={{textAlign: "left", marginRight: "20px", marginTop: "-5px"}} icon={<IoMdAdd className="iconAjust2"/>} > <span className="textAjust4">Nuevo Equipo</span></Button></Col>
            </Row>

            <Row style={{marginTop: "10px", paddingLeft: "15px"}}>
                <Simplecard delete={deleteTeam} edit={edit} clone={clone} openModalRename={openModalRename} setDates={setDates} equipos={equipos} />
            </Row>
                
            <div style={{height: "350px"}}></div>
            

            <Modal title="Crear Equipo" className="largeModal" visible={modalCreateTeam} onCancel={closeModalCreateTeam} onOk={sendCreateTeam} footer={[<span style={{marginRight:"120px"}}><Link to="#">Aquí</Link> puedes ver buenas prácticas en equipos Agile</span>,<Button style={{marginRight: "20px", width: "100px"}} className="secondary" onClick={closeModalCreateTeam} >Cancelar</Button>, <Link to="/equipos"><input type="button" className="primary" style={{width: "100px"}} onClick={ready} value="Crear" /> </Link>]} >
                    <Form name="form" layout="vertical">

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="site" label="Nombre del equipo" >
                                    <Input type="text" placeholder="Aqui puedes asignar el nombre de tu equipo" />
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="activity" label="Tipo de equipo" tooltip={info}>
                                    <Select placeholder="Selecciona una opción" onChange={showFrame} >
                                        <Option value="0">Personalizado</Option>
                                        <Option value="1">Modo Opertaivo Agile</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="empresa" label="Agregar colaboradores">
                                    <Input addonAfter={<SearchOutlined />} />
                                </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="modalidad" label="Modalidad" tooltip={info}>
                                    <Select placeholder="Selecciona una opción" >
                                        <Option value="jack">Funcional</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} id="frame" style={{display: "none"}}  >
                            <Col className="gutter-row" span={12}></Col>
                            <Col className="gutter-row" span={12}>
                                <Form.Item name="frame" label="Marco de trabajo" tooltip={info}>
                                    <Select placeholder="Selecciona una opción" >
                                        <Option value="jack">SCRUM</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>                    

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{textAlign: "center", marginTop: "10px"}}>
                            <Col className="gutter-row" span={8}>Miembros del equipo</Col>
                            <Col className="gutter-row" span={4}>Lider</Col>
                            <Col className="gutter-row" span={6}>Rol en el equipo</Col>
                            <Col className="gutter-row" span={6}>Acciones</Col>
                        </Row>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{textAlign: "center", marginTop: "10px"}}>
                            <Col className="gutter-row" span={8}>

                            <Row>
                                <Col span={6}>
                                    <p><img alt="ico" width="45" src={Avatar} /></p>
                                </Col>
                                <Col span={18}>
                                    <span><b>Laura Mendoza</b></span><br/>
                                    <span>Programador JR</span> 
                                </Col>
                            </Row>

                            </Col>
                            <Col className="gutter-row" span={4}>
                            <Form.Item style={{textAlign: "center"}} >
                                <Checkbox />
                            </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}  >
                                    <Col className="gutter-row" span={24} >
                                        <Form.Item name="rol" key={1}>
                                            <Select placeholder="Product Owner" >
                                                <Option value="jack">SCRUM</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="gutter-row" span={6}><Link className="link" to="#">Sustituir</Link> | <Link className="link" to="#">Eliminar</Link></Col>
                        </Row>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{textAlign: "center", marginTop: "10px"}}>
                            <Col className="gutter-row" span={8}>

                            <Row>
                                <Col span={6}>
                                    <p><img alt="ico" width="45" src={Avatar} /></p>
                                </Col>
                                <Col span={18}>
                                    <span><b>Laura Mendoza</b></span><br/>
                                    <span>Programador JR</span> 
                                </Col>
                            </Row>

                            </Col>
                            <Col className="gutter-row" span={4}>
                            <Form.Item style={{textAlign: "center"}} >
                                <Checkbox />
                            </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}  >
                                    <Col className="gutter-row" span={24} >
                                        <Form.Item name="rol" key={1}>
                                            <Select placeholder="Product Owner" >
                                                <Option value="jack">SCRUM</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="gutter-row" span={6}><Link className="link" to="#">Sustituir</Link> | <Link className="link" to="#">Eliminar</Link></Col>
                        </Row>

                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{textAlign: "center", marginTop: "10px"}}>
                            <Col className="gutter-row" span={8}>

                            <Row>
                                <Col span={6}>
                                    <p><img alt="ico" width="45" src={Avatar} /></p>
                                </Col>
                                <Col span={18}>
                                    <span><b>Laura Mendoza</b></span><br/>
                                    <span>Programador JR</span> 
                                </Col>
                            </Row>

                            </Col>
                            <Col className="gutter-row" span={4}>
                            <Form.Item style={{textAlign: "center"}} >
                                <Checkbox />
                            </Form.Item>
                            </Col>
                            <Col className="gutter-row" span={6}>
                                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}  >
                                    <Col className="gutter-row" span={24} >
                                        <Form.Item name="rol" key={1}>
                                            <Select placeholder="Product Owner" >
                                                <Option value="jack">SCRUM</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="tom">Tom</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="gutter-row" span={6}><Link className="link" to="#">Sustituir</Link> | <Link className="link" to="#">Eliminar</Link></Col>
                        </Row>

                    </Form>
            </Modal>

            <Modal title="Renombre de equipo" className="smallModal2" visible={modalRename} onCancel={closeModalRename} footer={[<Button style={{marginRight: "20px", width: "100px"}} className="secondary" onClick={done} >Cancelar</Button>, <Link to="/equipos"><input type="button" className="primary" style={{width: "100px", marginRight: "40px"}} onClick={done} value="Guardar" /> </Link>]} >

                <Form name="form1" layout="vertical">
                    <Form.Item name="nameTeam" >
                        <Input id="nameTeam" onChange={onchange} type="text" value={value}  defaultValue={value}  />
                    </Form.Item>
                </Form>
                
            </Modal>
                    
               
            <Input type="text" onChange={onchange} value={value}  defaultValue={value} />
            
        </>
    )   
}
