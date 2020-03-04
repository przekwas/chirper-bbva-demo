import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

const SideNav = props => {
	const [recentChirp, setRecentChirp] = useState({});

	//as the parent's array state is changing, this effect pulls the last element from the array
	//as the "most recent added chirp"
	useEffect(() => {
		if (props.chirps.length !== 0) {
			setRecentChirp(props.chirps[props.chirps.length - 1]);
		}
	}, [props.chirps]);

	return (
		<Card className="shadow-sm" onClick={props.scrollToBottom}>
			<Card.Body>
				<Card.Title>Most Recent Posts</Card.Title>
				{recentChirp.username && recentChirp.message && (
					<Card.Text className="border rounded p-2">
						<b>{recentChirp.username}</b> said: <br />
						{recentChirp.message.substring(0, 25)} ...
					</Card.Text>
				)}
			</Card.Body>
		</Card>
	);
};

export default SideNav;
