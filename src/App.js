import React from 'react';
import Footer from './containers/Footer'
import Navbar from './containers/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart'
import { CartContexProvider } from './context/CartContext'

function App() {
  return (
    <BrowserRouter>
      <CartContexProvider>
        <Navbar />
        <Switch>

          <Route exact path='/' >
            <Home />
          </Route>

          <Route path='categories/:category' >
            <Home />
          </Route>

          <Route path='/products/:id'>
            <ItemDetailContainer />
          </Route>

          <Route path='/cart'>
            <Cart />
          </Route>

        </Switch>
      </CartContexProvider>
      <Footer />
    </BrowserRouter>
  )

}

export default App;
