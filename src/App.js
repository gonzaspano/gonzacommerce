import React from 'react';
import Footer from './containers/Footer'
import Navbar from './containers/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import ItemDetailContainer from './containers/ItemDetailContainer';
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/ItemDetailContainer/:id'>
          <ItemDetailContainer />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )

}

export default App;
