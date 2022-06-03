import React, {useContext, useState} from 'react';
import {FORGOT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation,  NavLink, useNavigate} from "react-router-dom";
import {Button, Card, Container, Form} from 'react-bootstrap';
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 200}}
        >
            <img src="https://usnd.to/CJEY" className="position-fixed top-0 left-0" alt="bg" style={{width: "100%", zIndex: 0}}/>
            <Card style={{width: 450, outline: "solid 2px", outlineColor: "#6363DD"}} className="p-5">
                <h3 className="my-3 align-self-center" style={{fontFamily: "Roboto, sans-serif", color: "#6363DD", fontWeight: 600}}>{isLogin ? "АВТОРИЗАЦИЯ":"РЕГИСТРАЦИЯ"}</h3>
                <hr style={{color: "#6363DD"}} />
                <Form className="d-flex flex-column">
                    <div style={{margin: "25px 0px"}}>
                    <Form.Control placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{outline: "solid 1px", outlineColor: "#6363DD"}}/>
                    <Form.Control placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} type="password" className="my-3" style={{outline: "solid 1px", outlineColor: "#6363DD"}}/>
                    </div>
                    {isLogin ?
                        <div className="align-self-center">
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className="text-decoration-none">Не беда!</NavLink>
                        </div>
                        :
                        <div className="align-self-center">
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE} className="text-decoration-none">Не проблема!</NavLink>
                        </div>
                    }


                        <div className="align-self-center my-2">
                            <NavLink to={FORGOT_ROUTE} className="text-decoration-none">Забыли ваш пароль?</NavLink>
                        </div>

                    <Button variant={"outline"} onClick={click} style={{width: 200, outline: "solid 2px", outlineColor: "#6363DD"}} className="mt-2 align-self-center">
                        ГОТОВО
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;