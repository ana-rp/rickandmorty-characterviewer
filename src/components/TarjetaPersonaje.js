
import React from 'react';
import { Col, Card } from "react-bootstrap"

function TarjetaPersonaje(props) {
    return <Col xs={4}>
                <Card 
                    bg={"dark"}
                    text={"light"}
                    style={{ width: '16rem', margin: "20px" }}
                    >
                    <Card.Img variant="top" src={props.Personaje.image} />
                    <Card.Body>
                        <Card.Title>{props.Personaje.name}</Card.Title>
                        <Card.Text>
                            <b>Species: </b> {props.Personaje.species}
                            <br />
                            <b>Status: </b> {props.Personaje.status}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
    
}

export default TarjetaPersonaje;