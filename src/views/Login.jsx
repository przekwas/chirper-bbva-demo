import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/forms/LoginForm';

const Login = props => {
	return (
		<>
			<FullDiv>
				<Container>
					<Row className="justify-content-center">
						<Col md={8}>
							<LoginForm handleLoadLogin={props.handleLoadLogin} username={props.username} setUsername={props.setUsername} />
						</Col>
					</Row>
				</Container>
			</FullDiv>
		</>
	);
};

const FullDiv = styled.div`
	height: 100vmax;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Login;
