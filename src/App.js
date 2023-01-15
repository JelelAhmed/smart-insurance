import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';

import './App.scss';
import Products from './routes/products/products.component';


const App = () => {
  return (
		<Routes>
			<Route path='/' element={<Navigation />}>
			  <Route index element={<Home />} />
				<Route path='contact' element={<Contact />} />
				<Route path='auth' element={<Products />} />
				{/* <Route path='checkout' element={<Checkout />} /> */}
			</Route>
		</Routes>
  );
}

export default App;
