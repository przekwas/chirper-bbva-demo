import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ChirpLikes = () => {
	const [likes, setLikes] = useState(0);

	const likeIt = () => setLikes(likes + 1);

	// conditional render for an empty heart with no likes :(
	// or a filled heart if it has them! <3
	if (likes === 0) {
		return <FaRegHeart onClick={likeIt} />;
	} else {
		return (
			<>
				<FaHeart color="darkred" className="mr-2" onClick={likeIt} /> {likes}
			</>
		);
	}
};

export default ChirpLikes;
