import React, {useContext} from 'react';
import {Button, ButtonGroup, Card,} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE, CONTACTS_ROUTE, ENTRY_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, PRICE_ROUTE,} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Main = observer(() => {
    const {user} = useContext(Context)
    return (
        <div className='d-flex justify-content-center flex-column'>
            <img src="https://usnd.to/CJEY" className="position-fixed top-0 left-0" alt="bg" style={{width: "100%", zIndex: 0}}/>

                <div className="d-flex flex-column" style={{zIndex: 0, margin: "100px 170px"}}>
                    <h1 style={{fontFamily: "Roboto, sans-serif", fontSize: 60, zIndex: 5, color: "white", fontWeight: 800, fontStyle: "italic", marginBottom: "30px"}}>Быстро. Дешево. Качественно.</h1>
                    <h2 style={{fontFamily: "Roboto, sans-serif", fontSize: 36, zIndex: 5, color: "#fff", fontStyle: "italic"}}>Запишитесь на съемку прямо сейчас!<br style={{margin: '10px 0px'}}/>А мы вам обещаем, что все будет супер!</h2>
                    <Button className="rounded-7"
                            style={{
                                marginTop: 205,
                                backgroundColor: "white",
                                maxWidth: "300px",
                                padding: "20px 50px",
                                fontSize: 26,
                                borderRadius: 20,
                                outline:"solid 1px",
                                outlineColor:"#6363DD"}}
                    >
                        {user.isAuth ?
                            <NavLink to={ENTRY_ROUTE}
                                     style={{textDecoration: "none", color: "#6363DD"}}>ЗАПИСАТЬСЯ</NavLink>
                            :
                            <NavLink to={LOGIN_ROUTE}
                                     style={{textDecoration: "none", color: "#6363DD"}}>ЗАПИСАТЬСЯ</NavLink>
                        }
                    </Button>
                </div>
            <img src="https://usnd.to/CJBq" alt='adv' style={{maxWidth: 820, maxHeight: 480, zIndex: 5, position: "absolute", right: 90, top: 250}}/>
            <div className="d-flex justify-content-center align-items-center" style={{margin: "100px 170px",}}>
                <Card style={{maxHeight: window.innerHeight - 200, width: "100%", padding: "50px", display: "flex", alignItems: "center", boxShadow: "4px 4px 20px 5px rgba(0, 0, 0, 0.1)"}}>
                    <h1 style={{fontFamily: "Roboto, sans-serif", fontWeight: 700, fontStyle: "italic"}}>Добро пожаловать к нам!</h1>
                    <hr style={{color: "#6363DD", width: "100%", height: 2, margin: "40px 0px"}}/>
                    <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between",}}>
                        <div style={{marginLeft: 100, marginTop: 30}}>
                            <h1 style={{fontFamily: "Roboto, sans-serif", fontSize: 50, fontWeight: 600, fontStyle: "italic", marginBottom: 40}}>ФОТО НА ЛЮБЫЕ ДОКУМЕНТЫ</h1>
                            <h2 style={{fontFamily: "Roboto, sans-serif", fontSize: 30, fontWeight: 400, width: 400, marginBottom: 20}}>
                                Фото на любые документы в лучшем качестве от профессиональных фотографов, а также множество других услуг.
                            </h2>
                        </div>
                        <div style={{position: "relative"}}>
                            <img src="https://usnd.to/C2ZI" alt="passport" style={{maxWidth: 600, maxHeight: 500, objectFit: 'cover', marginRight: 60}}/>
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
});

export default Main;