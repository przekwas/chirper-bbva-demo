import React from 'react';
import { FaUser } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';

// simply pull the parent's username state and display it
const SideProfile = props => {
	return (
		<Card className="shadow-sm">
			<Card.Body>
				<Card.Title>
					<FaUser className="mr-2 border border-dark rounded-circle p-2" size="2.5rem" />
					{props.username}
				</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">@{props.username}</Card.Subtitle>
				<Card.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam congue mauris urna, at condimentum eros tempor ut. Praesent cursus
					ante sed tortor mattis, a tempus mauris placerat. Proin sit amet ornare lectus, in scelerisque orci. Integer scelerisque eget urna
					ut dapibus. Donec egestas nunc.
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default SideProfile;
