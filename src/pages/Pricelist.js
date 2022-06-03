import React from 'react';
import {Button, ButtonGroup, Card, Table} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, CONTACTS_ROUTE, FAQ_ROUTE, PRICE_ROUTE} from "../utils/consts";

const Price = () => {
    return (
        <div className='d-flex justify-content-center flex-column' style={{fontFamily: "Roboto, sans-serif"}}>
            <img src="https://usnd.to/CJEY" className="position-fixed top-0 left-0" alt="bg" style={{width: "100%", zIndex: 0}}/>
            <div className="d-flex justify-content-center align-items-center" style={{margin: "70px 170px 0px 170px",}}>
                <Card style={{maxHeight: window.innerHeight - 100, width: 700, padding: "50px", display: "flex", alignItems: "center", boxShadow: "4px 4px 20px 5px rgba(0, 0, 0, 0.1)"}}>
                    <h1 style={{fontFamily: "Roboto, sans-serif", fontWeight: 700, fontStyle: "italic"}}>ПРАЙСЛИСТ</h1>
                    <hr style={{color: "#6363DD", width: "100%", height: 2, margin: "40px 0px"}}/>
                    <div style={{width: "100%"}}>
                        <Table bordered hover style={{width: "100%", outline:"solid 2px", outlineColor:"#6363DD", borderRadius: 20}}>
                            <thead className="table-borderless">
                            <tr>
                                <th>#</th>
                                <th>Услуга</th>
                                <th>Цена</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Фото на документы</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Фотосъемка мероприятий</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Изготовление фотокниг и выпускных альбомов</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Багетные работы</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Фотопечать больших форматов</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Печать на холсте</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Реставрация и восстановление фото</td>
                                <td>300</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Оцифровка кассет и пленок</td>
                                <td>300</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                    <hr style={{color: "#6363DD", width: "100%", height: 2, margin: "40px 0px"}}/>
                    <ButtonGroup style={{alignItems: "center"}}>
                        <Button style={{maxWidth: 140, borderRadius: 30, padding: "10px 20px", marginRight: 20, color: "#6363DD"}}><NavLink to={CONTACTS_ROUTE} style={{textDecoration: "none", color: "white"}}>КОНТАКТЫ</NavLink></Button>
                        <Button style={{maxWidth: 120, borderRadius: 30, padding: "10px 20px", marginRight: 20}}><NavLink to={ABOUT_ROUTE} style={{textDecoration: "none", color: "white"}}>О НАС</NavLink></Button>
                        <Button style={{maxWidth: 120, borderRadius: 30, padding: "10px 20px", marginRight: 20}}><NavLink to={FAQ_ROUTE} style={{textDecoration: "none", color: "white"}}>FAQ</NavLink></Button>
                        <Button style={{maxWidth: 140, borderRadius: 30, padding: "10px 20px", marginRight: 20}}><NavLink to={PRICE_ROUTE} style={{textDecoration: "none", color: "white"}}>ПРАЙСЛИСТ</NavLink></Button>
                    </ButtonGroup>
                </Card>
            </div>
        </div>

    );
};

export default Price;