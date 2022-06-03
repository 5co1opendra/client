
import React from "react";
import {Button, Card, Form} from "react-bootstrap";

const Entry = () => {
    return (
        <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
            <Card style={{width: 450, outline: "solid 2px", outlineColor: "#6363DD"}} className="p-5">
                <h3 className="my-3 align-self-center" style={{fontFamily: "Roboto, sans-serif", color: "#6363DD", fontWeight: 600}}>ЗАПИСЬ</h3>
                <hr style={{color: "#6363DD"}} />
                <Form className="d-flex flex-column">
                    <div style={{margin: "25px 0px"}}>
                        <Form.Control placeholder="ФИО" style={{outline: "solid 1px", outlineColor: "#6363DD"}}/>
                        <Form.Control placeholder="Номер телефона" style={{outline: "solid 1px", outlineColor: "#6363DD"}}/>
                        <Form.Control placeholder="Услуга" className="my-3" style={{outline: "solid 1px", outlineColor: "#6363DD"}}/>
                        <Form.Control placeholder="Дата и время" className="my-3" style={{outline: "solid 1px", outlineColor: "#6363DD"}}/>
                    </div>
                    <Button variant={"outline"} style={{width: 200, outline: "solid 2px", outlineColor: "#6363DD"}} className="mt-2 align-self-center">
                        ГОТОВО
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Entry;