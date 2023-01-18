import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';
import Checkout from './routes/checkout/checkout.component';

import './App.scss';
import Plans from './routes/plans/plans.component';
import Login from './routes/login/login.component';


const App = () => {
  return (
		<Routes>
			<Route path='/' element={<Navigation />}>
			  <Route index element={<Home />} />
				<Route path='contact' element={<Contact />} />
				<Route path='products' element={<Plans />} />
				<Route path='checkout' element={<Checkout />} />
				<Route path='login' element={<Login />} />

			</Route>
		</Routes>
  );
}

export default App;
