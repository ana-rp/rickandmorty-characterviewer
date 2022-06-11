import React, { useState } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap"
import { getPersonajes } from "./Actions";

function ControlBuscar (props) {
    const [nombreBuscar, setNombreBuscar] = useState("");
	const [statusBuscar, setStatusBuscar] = useState("");


    const buscarBoton = (evt) => {
		evt.preventDefault();
        getPersonajes(props.fnCallbackBuscar, nombreBuscar, statusBuscar);
	}

    return <>
        <Form onSubmit={(evt) => { buscarBoton(evt) }}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type='text' value={nombreBuscar} onChange={(evt) => { setNombreBuscar(evt.target.value)}} />
                </Form.Group>

                <Form.Group as={Col} controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select onChange={(evt) => { setStatusBuscar(evt.target.value) }}>
                    <option value="">Any</option>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <br /><br />
                <div style={{width: "33%", marginLeft: "33%", textAlign: "center"}}>
                    <Button variant="primary" type="submit">Search</Button>
                </div>
            </Row>
        </Form>
    </>
}

export default ControlBuscar;