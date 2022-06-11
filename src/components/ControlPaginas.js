import React from 'react';
import { Row, Col, Button } from "react-bootstrap"

function ControlPaginas (props) {
    return <Row>
        <Col xs={4}>
            {
                props.infoRes.prev ?
                    <div>
                        <Button style={{display: "inline-block"}}  onClick={() => {props.fnAnterior()}}>Previous</Button>
                    </div>
                : null
            }
        </Col>
        <Col xs={4}>
            {
                props.infoRes.pages ?
                    <>
                        Page {props.pagActual} of {props.infoRes.pages}
                    </>
                : null
            }
        </Col>
        <Col xs={4}>
            {
                props.infoRes.next ?
                    <div>
                        <Button style={{display: "inline-block"}} onClick={() => {props.fnSiguiente()}}>Next</Button>
                    </div>
                : null
            }
        </Col>
    </Row>
}

export default ControlPaginas;