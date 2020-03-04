import React from 'react';
import { FaUser } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ChirpLikes from './ChirpLikes';
import moment from 'moment';

const ChirpCard = props => {
	return (
		<Card className="my-1 shadow-sm">
			<ListGroup variant="flush">
				<ListGroup.Item className="d-flex align-items-center">
					<FaUser className="mr-2 border border-dark rounded-circle p-2" size="2.5rem" />
					<span>
						{props.chirp.username}
						<br />
						<span className="text-muted">@{props.chirp.username}</span>
					</span>
				</ListGroup.Item>
				<ListGroup.Item className="text-wrap">
					{/* textarea elements use \n to placehold new lines in a js string */}
					{/* we split the string into an array of "paragraphs" */}
					{/* and map through the array as usual :) */}
					{props.chirp.message.split('\n').map((block, i) => (
						<span key={`block-item-${i}`}>
							{block}
							<br />
						</span>
					))}
				</ListGroup.Item>
				<ListGroup.Item className="d-flex justify-content-between align-items-center">
					{/* moment makes our life so ezpz for formatting dates <3 */}
					<i className="text-muted">{moment(props.chirp.created_at).format('MMMM Do YYYY, h:mm:ss a')}</i>
					<span className="d-flex justify-content-center align-items-center">
						<ChirpLikes />
					</span>
				</ListGroup.Item>
			</ListGroup>
		</Card>
	);
};

export default ChirpCard;
