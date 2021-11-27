import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './commons/about/About';
import Index from './components/index/Index'; 
import Main from './container/layout/Main';    

import './static/css/main.scss';
const { PUBLIC_URL } = process.env; 
console.log(PUBLIC_URL); 
 
function App() {
	return (
		<BrowserRouter basename={PUBLIC_URL}>
			<Suspense fallback={<Main />} >
				<Routes>
					<Route exact path="/" element={<Index/>}/>
					<Route path="/about" element={<About/>} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
