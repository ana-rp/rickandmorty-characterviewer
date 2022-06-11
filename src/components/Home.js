import React, { useState, useEffect } from 'react';
import { Row, Col } from "react-bootstrap"
import TarjetaPersonaje from './TarjetaPersonaje';
import ControlPaginas from './ControlPaginas';
import ControlBuscar from './ControlBuscar';
import { getPersonajes } from './Actions'

function Home (props) {
	const [arrPersonajes, setArrPersonajes] = useState([]);
	const [infoRes, setInfoRes] = useState({});
	const [pagActual, setPagActual] = useState(1);

	const fnCallbackPersonajes = (result) => {
		setArrPersonajes(result.results || []);
		setInfoRes(result.info || {});
		window.scrollTo(0, 0); // SCROLL HACIA EL PRINCIPIO DE LA PAGINA
	}

	useEffect(() => {
		getPersonajes(fnCallbackPersonajes)
	}, [])



	return(<div style={{marginBottom: "200px"}}>
				<h1>Rick and Morty Characters</h1>
					<div style={{width: "60%", marginLeft: "20%", textAlign: "center"}}>
						<ControlBuscar
							fnCallbackBuscar={(result) => {fnCallbackPersonajes(result); setPagActual(1);}}
							/>
						
						<br /> <br />

						<Row>
							{
								arrPersonajes.length ?
								arrPersonajes.map((p, i) => {
									return <TarjetaPersonaje key={i} Personaje={p} />
								})
								:
								<Col>
									No results found.
								</Col>
							}
						</Row>
						
						<br />


						<ControlPaginas
							infoRes={infoRes}
							pagActual={pagActual}
							fnAnterior={() => {setPagActual(pagActual - 1); getPersonajes(fnCallbackPersonajes, null, null, infoRes.prev)}}
							fnSiguiente={() => {setPagActual(pagActual + 1); getPersonajes(fnCallbackPersonajes, null, null, infoRes.next)}}
							/>
					</div>
					
				
			</div>)
}

export default Home;