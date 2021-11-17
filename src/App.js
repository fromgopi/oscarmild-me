import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './components/index/Index';
import Main from './container/layout/Main';

import './static/css/main.scss';
const { PUBLIC_URL } = process.env;

function App() {
	return (
		<BrowserRouter basename={PUBLIC_URL}>
			<Suspense fallback={<Main />} >
				<Switch>
					<Route exact path="/" component={<Index/>}/>
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
