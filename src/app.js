import React from 'react';
import ReacDOM from 'react-dom';
import Home from './components/Home';

const App = () => {
	return(<Home />)
}


ReacDOM.render(<App />, document.getElementById("root"))
