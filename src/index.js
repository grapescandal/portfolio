import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';

import NavBar from './component/NavBar.jsx';

ReactDOM.render(
	<React.Fragment>
		<NavBar />
	</React.Fragment>, document.getElementById('root'));