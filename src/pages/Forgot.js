import React from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Button, Card, Container, Form} from "react-bootstrap";

const Forgot = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 200}}
        >
            <img src="https://usnd.to/CJEY" className="position-fixed top-0 left-0" alt="bg" style={{width: "100%", zIndex: 0}}/>
            <Card style={{width: 450, outline: "solid 2px", outlineColor: "#6363DD"}} className="p-5">
                <h4 className="my-1 align-self-start" style={{fontFamily: "Roboto, sans-serif", color: "#6363DD", fontWeight: 500}}>ЗАБЫЛИ ПАРОЛЬ?</h4>
                <hr/>
                <Form className="d-flex flex-column">

                    <Form.Control className="mt-1" placeholder="Email для отправки письма" style={{outline: "solid 1px", outlineColor: "#6363DD"}}/>

                    <div className="align-self-start my-3">
                        <NavLink to={LOGIN_ROUTE} className="text-decoration-none">Вдруг вспомнили?</NavLink>
                    </div>

                    <Button variant={"outline"} style={{width: 200, outline: "solid 2px", outlineColor: "#6363DD"}} className="mt-2 align-self-center">
                        ОТПРАВИТЬ
                    </Button>
                </Form>
            </Card>

        </Container>
    );
};
export default Forgot;