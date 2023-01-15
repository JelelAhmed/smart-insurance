import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';

import './App.scss';


const App = () => {
  return (
		<Routes>
			<Route path='/' element={<Navigation />}>
			  <Route index element={<Home />} />
				<Route path='contact' element={<Contact />} />
				{/* <Route path='auth' element={<Authentication />} />
				<Route path='checkout' element={<Checkout />} /> */}
			</Route>
		</Routes>
  );
}

export default App;
