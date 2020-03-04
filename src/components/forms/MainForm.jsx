import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const MainForm = props => {
	const [message, setMessage] = useState('');
	const [charCount, setCharCount] = useState(0);
	const [errorChirp, setErrorChirp] = useState(false);
	const [errorLength, setErrorLength] = useState(false);

	//effect that derives the state of message and sets the char count as message changes
	useEffect(() => {
		setCharCount(message.length);
	}, [message]);

	//effect that validates the charCount as its state changes
	useEffect(() => {
		if (charCount >= 76) {
			setErrorLength(true);
		} else {
			setErrorLength(false);
			setErrorChirp(false);
		}
	}, [charCount]);

	const handleSubmit = e => {
		e.preventDefault();
		//checks to make sure our chirp message is valid
		if (charCount === 0 || charCount > 75) {
			setErrorChirp(true);
		} else {
			//otherwise passes it up into the array at the top level
			props.addChirp({
				message,
				username: props.username,
				created_at: Date.now()
			});
			//clears the textarea
			setMessage('');
		}
	};

	return (
		<Form className="border rounded px-3 pt-3 bg-white shadow-sm">
			<Form.Group>
				<Form.Control
					value={message}
					onChange={e => setMessage(e.target.value)}
					placeholder="What be yer' thoughts ..."
					as="textarea"
					rows={5}
				/>
				<div className="d-flex justify-content-between align-items-center">
					{/* ternary conditional renders for form validation */}
					{errorChirp ? <small className="text-danger">Nah dawg.</small> : <small></small>}
					<small className={errorLength ? 'text-danger' : null}>{charCount} / 75</small>
				</div>
				<Button
					onClick={handleSubmit}
					variant="outline-primary"
					className="mt-3 w-50 mx-auto d-flex justify-content-center align-items-center">
					<FaPencilAlt className="mx-1" />
					<span className="mx-1">Chirp It</span>
				</Button>
			</Form.Group>
		</Form>
	);
};

export default MainForm;
