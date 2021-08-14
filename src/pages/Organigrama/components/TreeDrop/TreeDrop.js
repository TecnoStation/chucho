import React, { useState } from 'react'
import { Col, Dropdown, Menu, Row } from 'antd'
import { Link } from 'react-router-dom'
import Avatar from '../../../../assets/img/avatar.png';
import More from '../../../../assets/img/iconos/more_vert-24px.svg'
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { CgMoreAlt } from "react-icons/cg";
import { GiOfficeChair } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import Insings from '../../../../assets/img/iconos/insights-24px.svg'
import Trending from '../../../../assets/img/iconos/trending_up-24px.svg'
import {v4 as uuid} from "uuid";
import './TreeDrop.scss';

export default function TreeDrop() {

    const menu = (
        <Menu>
          <Menu.Item key={uuid()} >
            <Menu.Item key={uuid()}><Link to="#">Menu</Link></Menu.Item>
          </Menu.Item>
        </Menu>
      );
    
    const [drop, setDrop] = useState('showBlock');
    const [visible, seVisible] = useState('hide');

    return (
        <>

            <Row style={{ height: "50px", paddingBottom: "50px", marginTop: "20px"}}  >
                <Col style={{textAlign: "right",  marginRight: "-5px"}} span={1}>
                    <Link to="#" className={drop} onClick={() => {setDrop('hide'); seVisible('showBlock')}}><IoMdArrowDropright style={{ fontSize: "28px", marginTop: "10px", color: "#000" }} /></Link>
                    <Link to="#" className={visible} onClick={() => {setDrop('showBlock'); seVisible('hide')}}><IoMdArrowDropdown style={{ fontSize: "28px", marginTop: "10px", color: "#000" }} /></Link>
                </Col> 
                <Col style={{textAlign: "left"}} span={1}>
                    <p><img style={{marginTop: "-5px"}} alt="ico" width="55" src={Avatar} /></p>
                </Col>
                <Col style={{paddingLeft: "15px"}} span={5}>
                    <span>Panchita Lopez</span><br/>
                    <span><b>Directora de marketing</b></span>
                </Col>
                <Col span={17}>
                    <Row style={{height: "50px"}} className="dividerBottomFull">
                        <Col  span={11}></Col>
                        <Col  span={2} className="iconGray" style={{fontSize: "20px", textAlign: "right"}} ><img style={{marginTop: "-15px"}} alt="ico" width="22" src={Trending} /></Col>
                        <Col span={1} className="iconGreenTwo"><span>42%</span></Col>
                        <Col span={2} style={{textAlign: "right"}}><img style={{marginTop: "-5px"}} alt="ico" width="20" src={Insings} /></Col>
                        <Col span={1} className="iconGreenTwo" ><span>15%</span></Col>
                        <Col span={2} className="iconRed" style={{fontSize: "18px", textAlign: "right"}}><GiOfficeChair /></Col>
                        <Col span={1} className="iconRed"><span>8</span></Col>
                        <Col span={1} className="iconGray" style={{fontSize: "16px", textAlign: "right"}}><FaUserAlt /></Col>
                        <Col span={1}><span>18</span></Col>
                        <Col style={{textAlign: "center"}} span={2}>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}><CgMoreAlt style={{ fontSize: "28px", color: "#000"}} /></Link>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
            
            <div className={visible}>
                <Row style={{ height: "50px", paddingBottom: "50px", marginTop: "40px", marginLeft: "40px"}}  >
                    <Col style={{textAlign: "right",  marginRight: "-5px"}} span={1}>
                        <Link to="#" className="showBlock" ><IoMdArrowDropright style={{ fontSize: "28px", marginTop: "10px", color: "#000" }} /></Link>
                    </Col> 
                    <Col style={{textAlign: "left"}} span={1}>
                        <p><img style={{marginTop: "-5px"}} alt="ico" width="55" src={Avatar} /></p>
                    </Col>
                    <Col style={{paddingLeft: "15px"}} span={5}>
                        <span>Panchita Lopez</span><br/>
                        <span><b>Directora de marketing</b></span>
                    </Col>
                    <Col span={17}>
                        <Row style={{height: "50px"}} className="dividerBottomFull">
                            <Col  span={11}></Col>
                            <Col  span={2} className="iconGray" style={{fontSize: "20px", textAlign: "right", marginLeft: "-10px"}} ><img style={{marginTop: "-15px"}} alt="ico" width="22" src={Trending} /></Col>
                            <Col span={1} className="iconGreenTwo"><span>42%</span></Col>
                            <Col span={2} style={{textAlign: "right", marginLeft: "5px"}}><img style={{marginTop: "-5px"}} alt="ico" width="20" src={Insings} /></Col>
                            <Col span={1} className="iconGreenTwo" ><span>15%</span></Col>
                            <Col span={2} className="iconRed" style={{fontSize: "18px", textAlign: "right"}}><GiOfficeChair /></Col>
                            <Col span={1} className="iconRed"><span>8</span></Col>
                            <Col span={1} className="iconGray" style={{fontSize: "16px", textAlign: "right", marginLeft: "5px"}}><FaUserAlt /></Col>
                            <Col span={1}><span>18</span></Col>
                            <Col style={{textAlign: "center"}} span={2}>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}><CgMoreAlt style={{ fontSize: "28px", color: "#000"}} /></Link>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <svg className="lineTree" version="1.1" xmlns="http://www.w3.org/2250/svg"
                        width="50" height="120" viewBox="0 0 140 90">
                    <path d="m 5,-70 v 225 h 80"
                            fill="none" stroke="#ccc" stroke-width="3" />
                </svg>
            </div>

            <div className={visible}>
                <Row style={{ height: "50px", paddingBottom: "50px", marginTop: "30px", marginLeft: "40px"}}  >
                    <Col style={{textAlign: "right",  marginRight: "-5px"}} span={1}>
                        <Link to="#" className="showBlock" ><IoMdArrowDropright style={{ fontSize: "28px", marginTop: "10px", color: "#000" }} /></Link>
                    </Col> 
                    <Col style={{textAlign: "left"}} span={1}>
                        <p><img style={{marginTop: "-5px"}} alt="ico" width="55" src={Avatar} /></p>
                    </Col>
                    <Col style={{paddingLeft: "15px"}} span={5}>
                        <span>Panchita Lopez</span><br/>
                        <span><b>Directora de marketing</b></span>
                    </Col>
                    <Col span={17}>
                        <Row style={{height: "50px"}} className="dividerBottomFull">
                            <Col  span={11}></Col>
                            <Col  span={2} className="iconGray" style={{fontSize: "20px", textAlign: "right", marginLeft: "-10px"}} ><img style={{marginTop: "-15px"}} alt="ico" width="22" src={Trending} /></Col>
                            <Col span={1} className="iconGreenTwo"><span>42%</span></Col>
                            <Col span={2} style={{textAlign: "right", marginLeft: "5px"}}><img style={{marginTop: "-5px"}} alt="ico" width="20" src={Insings} /></Col>
                            <Col span={1} className="iconGreenTwo" ><span>15%</span></Col>
                            <Col span={2} className="iconRed" style={{fontSize: "18px", textAlign: "right"}}><GiOfficeChair /></Col>
                            <Col span={1} className="iconRed"><span>8</span></Col>
                            <Col span={1} className="iconGray" style={{fontSize: "16px", textAlign: "right", marginLeft: "5px"}}><FaUserAlt /></Col>
                            <Col span={1}><span>18</span></Col>
                            <Col style={{textAlign: "center"}} span={2}>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}><CgMoreAlt style={{ fontSize: "28px", color: "#000"}} /></Link>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <svg className="lineTree" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="50" height="120" viewBox="0 0 140 90">
                    <path d="m 5,-70 v 225 h 80"
                            fill="none" stroke="#ccc" stroke-width="3" />
                </svg>
            </div>

            <div className={visible}>
                <Row style={{ height: "50px", paddingBottom: "50px", marginTop: "30px", marginLeft: "40px"}}  >
                    <Col style={{textAlign: "right",  marginRight: "-5px"}} span={1}>
                        <Link to="#" className="showBlock" ><IoMdArrowDropright style={{ fontSize: "28px", marginTop: "10px", color: "#000" }} /></Link>
                    </Col> 
                    <Col style={{textAlign: "left"}} span={1}>
                        <p><img style={{marginTop: "-5px"}} alt="ico" width="55" src={Avatar} /></p>
                    </Col>
                    <Col style={{paddingLeft: "15px"}} span={5}>
                        <span>Panchita Lopez</span><br/>
                        <span><b>Directora de marketing</b></span>
                    </Col>
                    <Col span={17}>
                        <Row style={{height: "50px"}} className="dividerBottomFull">
                            <Col  span={11}></Col>
                            <Col  span={2} className="iconGray" style={{fontSize: "20px", textAlign: "right", marginLeft: "-10px"}} ><img style={{marginTop: "-15px"}} alt="ico" width="22" src={Trending} /></Col>
                            <Col span={1} className="iconGreenTwo"><span>42%</span></Col>
                            <Col span={2} style={{textAlign: "right", marginLeft: "5px"}}><img style={{marginTop: "-5px"}} alt="ico" width="20" src={Insings} /></Col>
                            <Col span={1} className="iconGreenTwo" ><span>15%</span></Col>
                            <Col span={2} className="iconRed" style={{fontSize: "18px", textAlign: "right"}}><GiOfficeChair /></Col>
                            <Col span={1} className="iconRed"><span>8</span></Col>
                            <Col span={1} className="iconGray" style={{fontSize: "16px", textAlign: "right", marginLeft: "5px"}}><FaUserAlt /></Col>
                            <Col span={1}><span>18</span></Col>
                            <Col style={{textAlign: "center"}} span={2}>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}><CgMoreAlt style={{ fontSize: "28px", color: "#000"}} /></Link>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <svg className="lineTree" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="50" height="120" viewBox="0 0 140 90">
                    <path d="m 5,-70 v 225 h 80"
                            fill="none" stroke="#ccc" stroke-width="3" />
                </svg>
            </div>

            <div className={visible}>
                <Row style={{ height: "50px", paddingBottom: "50px", marginTop: "30px", marginLeft: "40px"}}  >
                    <Col style={{textAlign: "right",  marginRight: "-5px"}} span={1}>
                        <Link to="#" className="showBlock" ><IoMdArrowDropright style={{ fontSize: "28px", marginTop: "10px", color: "#000" }} /></Link>
                    </Col> 
                    <Col style={{textAlign: "left"}} span={1}>
                        <p><img style={{marginTop: "-5px"}} alt="ico" width="55" src={Avatar} /></p>
                    </Col>
                    <Col style={{paddingLeft: "15px"}} span={5}>
                        <span>Panchita Lopez</span><br/>
                        <span><b>Directora de marketing</b></span>
                    </Col>
                    <Col span={17}>
                        <Row style={{height: "50px"}} className="dividerBottomFull">
                            <Col  span={11}></Col>
                            <Col  span={2} className="iconGray" style={{fontSize: "20px", textAlign: "right", marginLeft: "-10px"}} ><img style={{marginTop: "-15px"}} alt="ico" width="22" src={Trending} /></Col>
                            <Col span={1} className="iconGreenTwo"><span>42%</span></Col>
                            <Col span={2} style={{textAlign: "right", marginLeft: "5px"}}><img style={{marginTop: "-5px"}} alt="ico" width="20" src={Insings} /></Col>
                            <Col span={1} className="iconGreenTwo" ><span>15%</span></Col>
                            <Col span={2} className="iconRed" style={{fontSize: "18px", textAlign: "right"}}><GiOfficeChair /></Col>
                            <Col span={1} className="iconRed"><span>8</span></Col>
                            <Col span={1} className="iconGray" style={{fontSize: "16px", textAlign: "right", marginLeft: "5px"}}><FaUserAlt /></Col>
                            <Col span={1}><span>18</span></Col>
                            <Col style={{textAlign: "center"}} span={2}>
                                <Dropdown overlay={menu} trigger={['click']}>
                                    <Link to="#" className="ant-dropdown-link" onClick={e => e.preventDefault()}><CgMoreAlt style={{ fontSize: "28px", color: "#000"}} /></Link>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <svg className="lineTree" version="1.1" xmlns="http://www.w3.org/2000/svg"
                        width="50" height="120" viewBox="0 0 140 90">
                    <path d="m 5,-70 v 225 h 80"
                            fill="none" stroke="#ccc" stroke-width="3" />
                </svg>
            </div>
                    

            
        </>
    )
}
