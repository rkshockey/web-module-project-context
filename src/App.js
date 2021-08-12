import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { useStorage } from './hooks/cartHook';

import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useStorage([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	function removeItem (itemId){
		setCart(cart.filter(p => p.id !== itemId))
	}

	return (
			<CartContext.Provider value={[cart, removeItem]}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<ProductContext.Provider value={[products, addItem]}>
						<Route exact path="/">
							<Products />
						</Route>
					</ProductContext.Provider>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartContext.Provider>
	);
}

export default App;
