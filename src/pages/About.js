import React from 'react';
import {Button, ButtonGroup, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, CONTACTS_ROUTE, FAQ_ROUTE, PRICE_ROUTE} from "../utils/consts";

const About = () => {
    return (
        <div className='d-flex justify-content-center flex-column' style={{fontFamily: "Roboto, sans-serif"}}>
            <img src="https://usnd.to/CJEY" className="position-fixed top-0 left-0" alt="bg" style={{width: "100%", zIndex: 0}}/>
            <div className="d-flex justify-content-center align-items-center" style={{margin: "100px 170px",}}>
                <Card style={{maxHeight: window.innerHeight - 100, width: "100%", padding: "50px", display: "flex", alignItems: "center", boxShadow: "4px 4px 20px 5px rgba(0, 0, 0, 0.1)"}}>
                    <h1 style={{fontFamily: "Roboto, sans-serif", fontWeight: 700, fontStyle: "italic"}}>О НАШЕЙ КОМПАНИИ</h1>
                    <hr style={{color: "#6363DD", width: "100%", height: 2, margin: "40px 0px"}}/>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "50%"}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                            <div style={{display: "flex", flexDirection:"column", width: 200, height: 200, justifyContent: "space-around", alignItems: "center", outline: "solid 2px", outlineColor:"#6363DD", borderRadius: 30, margin: 20}}>
                                <img src="https://usnd.to/C2sH" alt="21" style={{width: 80, marginTop: 20}}/>
                                <h1 style={{fontSize: 20, marginBottom: 20}}>ГОД НА РЫНКЕ</h1>
                            </div>
                            <div style={{display: "flex", flexDirection:"column", width: 200, height: 200, justifyContent: "space-around", alignItems: "center", outline: "solid 2px", outlineColor:"#6363DD", borderRadius: 30, margin: 20}}>
                                <img src="https://usnd.to/C296" alt="21" style={{width: 90,height:90, marginTop: 20}}/>
                                <h1 style={{fontSize: 20, marginBottom: 20}}>УДОБНЫЙ САЙТ</h1>
                            </div>
                            <div style={{display: "flex", flexDirection:"column", width: 200, height: 200, justifyContent: "center", alignItems: "center", outline: "solid 2px", outlineColor:"#6363DD", borderRadius: 30, margin: 20}}>
                                <img src="https://usnd.to/C23X" alt="21" style={{width: 90, margin: 20}}/>
                                <h1 style={{fontSize: 20, marginBottom: 10}}>ДОВОЛЬНЫХ<br/>КЛИЕНТОВ</h1>
                            </div>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>
                            <div style={{display: "flex", flexDirection:"column", width: 200, height: 200, justifyContent: "space-around", alignItems: "center", outline: "solid 2px", outlineColor:"#6363DD", borderRadius: 30, margin: 20}}>
                                <img src="https://usnd.to/C29f" alt="21" style={{width: 80, marginTop: 20}}/>
                                <h1 style={{fontSize: 20, marginBottom: 20}}>ОТЛИЧНОЕ<br/>КАЧЕСТВО</h1>
                            </div>
                            <div style={{display: "flex", flexDirection:"column", width: 200, height: 200, justifyContent: "space-around", alignItems: "center", outline: "solid 2px", outlineColor:"#6363DD", borderRadius: 30, margin: 20}}>
                                <img src="https://usnd.to/C2KN" alt="21" style={{width: 90, marginTop: 20}}/>
                                <h1 style={{fontSize: 20, marginBottom: 20}}>ФОТОГРАФЫ<br/><span style={{margin:25}}>ПРОФИ</span></h1>
                            </div>
                            <div style={{display: "flex", flexDirection:"column", width: 200, height: 200, justifyContent: "space-around", alignItems: "center", outline: "solid 2px", outlineColor:"#6363DD", borderRadius: 30, margin: 20}}>
                                <img src="https://usnd.to/C29Q" alt="21" style={{width: 80, marginTop: 20}}/>
                                <h1 style={{fontSize: 20, marginBottom: 20}}>В ЦЕНТРЕ ГОРОДА</h1>
                            </div>
                        </div>
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

export default About;