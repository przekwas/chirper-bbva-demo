import React, { useState } from 'react';
import { FaFistRaised } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = props => {
	const [error, setError] = useState(false);

	const handleLogin = e => {
		e.preventDefault();
		//checks to make sure username length is something other than empty
		if (props.username.length === 0) {
			setError(true);
		} else {
			//invokes parent components setter for login state
			props.handleLoadLogin();
		}
	};

	return (
		<Form onSubmit={handleLogin} className="bg-white p-3 shadow border rounded">
			<Form.Group className="text-center">
				<Form.Label>Who are ye'?</Form.Label>
				<Form.Control required placeholder="mang0" value={props.username} onChange={e => props.setUsername(e.target.value)} />
				{/* conditional render for validation */}
				{error && <small className="text-danger">Nah dawg, you need a username.</small>}
				<Button
					onClick={handleLogin}
					block
					variant="outline-primary"
					className="mt-3 w-50 mx-auto d-flex justify-content-center align-items-center">
					<FaFistRaised className="mx-1" />
					<span className="mx-1">Login</span>
				</Button>
			</Form.Group>
		</Form>
	);
};

export default LoginForm;
