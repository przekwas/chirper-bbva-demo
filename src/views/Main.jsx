import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChirpCard from '../components/chirps/ChirpCard';
import MainForm from '../components/forms/MainForm';
import Header from '../components/shared/Header';
import SideProfile from '../components/shared/SideProfile';
import SideNav from '../components/shared/SideNav';

const Main = props => {
	const [chirps, setChirps] = useState([]);

	const addChirp = chirp => setChirps([...chirps, chirp]);
	const scrollToBottom = () => window.scrollTo(0, document.body.scrollHeight);

	return (
		<>
			<Header />
			<Container fluid>
				<Row className="justify-content-center my-2">
					<Col md={{ span: 3, order: 1 }}>
						<SideProfile username={props.username} />
					</Col>
					<Col md={{ span: 3, order: 3 }}>
						<SideNav chirps={chirps} scrollToBottom={scrollToBottom} />
					</Col>
					<Col md={{ order: 2 }}>
						<MainForm addChirp={addChirp} username={props.username} />
						<Row>
							<Col>
								{chirps.map(chirp => (
									<ChirpCard key={`chirpkey-${chirp.created_at}`} chirp={chirp} />
								))}
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Main;
