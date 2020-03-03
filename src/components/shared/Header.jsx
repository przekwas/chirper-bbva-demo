import React from 'react';
import styled from 'styled-components';
import { FaFeatherAlt } from 'react-icons/fa';

const Header = () => {
	return (
		<MidnightDiv className="shadow-sm">
			<FaFeatherAlt className="mx-2" />
			Chirper
			<FaFeatherAlt className="mx-2" style={{ transform: 'scale(-1, 1)' }} />
		</MidnightDiv>
	);
};

const MidnightDiv = styled.div`
	background-color: #252e37;
	height: 15vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-size: 4rem;
`;

export default Header;
