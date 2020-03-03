import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ChirpLikes = () => {
	const [likes, setLikes] = useState(0);

	const likeIt = () => setLikes(likes + 1);

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
