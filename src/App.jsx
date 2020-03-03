import React, { useState } from 'react';
import Login from './views/Login';
import Main from './views/Main';

const App = () => {
	const [loadLogin, setLoadLogin] = useState(true);
	const [username, setUsername] = useState('');

	const handleLoadLogin = () => setLoadLogin(false);

	if (loadLogin) {
		return <Login handleLoadLogin={handleLoadLogin} username={username} setUsername={setUsername} />;
	} else {
		return <Main username={username} />;
	}
};

export default App;
