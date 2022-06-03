import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ABOUT_ROUTE, CONTACTS_ROUTE, FAQ_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PRICE_ROUTE} from "../utils/consts";
import {NavLink,} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const logOut = () => {
        localStorage.removeItem('token')
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Container>
            <Navbar className="justify-content-center align-self-center rounded" variant="dark" style={{zIndex: 5, backgroundColor:"#fff", marginTop: 30 }}>
                <Container className="m-1">
                    <NavLink to={MAIN_ROUTE} className="text-decoration-none mx-2" style={{color: "#6363DD", fontSize: 22, fontStyle: "italic", fontWeight:800, fontFamily: "Roboto, sans-serif"}}>VDVPHOTO</NavLink>
                    <Nav className="me-auto">
                        <div className="mx-5">
                            <Button variant={"outline"} className="mx-2" style={{width:120, outline:"solid 1px", outlineColor:"#6363DD", fontWeight: 600}}><NavLink style={{color:"#6363DD", textDecoration: "none"}} to={CONTACTS_ROUTE}>КОНТАКТЫ</NavLink></Button>
                            <Button variant={"outline"} className="mx-2" style={{width:120, outline:"solid 1px", outlineColor:"#6363DD", fontWeight: 600}}><NavLink style={{color:"#6363DD", textDecoration: "none"}} to={ABOUT_ROUTE}>О НАС</NavLink></Button>
                            <Button variant={"outline"} className="mx-2" style={{width:120, outline:"solid 1px", outlineColor:"#6363DD", fontWeight: 600}}><NavLink style={{color:"#6363DD", textDecoration: "none"}} to={FAQ_ROUTE}>FAQ</NavLink></Button>
                            <Button variant={"outline"} className="mx-2" style={{width:120, outline:"solid 1px", outlineColor:"#6363DD", fontWeight: 600}}><NavLink style={{color:"#6363DD", textDecoration: "none"}} to={PRICE_ROUTE}>ПРАЙСЛИСТ</NavLink></Button>
                        </div>
                    </Nav>
                    {user.isAuth ?
                        <Button onClick={() => logOut()} variant={"outline"} className="mx-1" style={{
                                width: 100,
                                color: "#6363DD",
                                outline: "solid 1px",
                                outlineColor: "#6363DD",
                                fontWeight: 600
                        }}>
                                ВЫЙТИ
                        </Button>
                        :
                        <NavLink to={LOGIN_ROUTE} className="text-decoration-none mx-3"
                        style={{color: "white", fontWeight: 800, fontFamily: "Roboto, sans-serif"}}>
                        <Button variant={"outline"} className="mx-1" style={{
                        width: 100,
                        color: "#6363DD",
                        outline: "solid 1px",
                        outlineColor: "#6363DD",
                        fontWeight: 600
                    }}> ВОЙТИ </Button>
                        </NavLink>
                    }
                </Container>
            </Navbar>
        </Container>
    );
});

export default NavBar;