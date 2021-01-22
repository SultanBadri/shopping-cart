import React, { useState } from "react";
import Nav from "./components/Navbar/Nav";
import Home from "./components/HomePage/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { HashRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<any>([]);

  return (
    <HashRouter>
      <Nav cartItems={cartItems} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact>
          <Shop cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
        <Route path="/cart" exact>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
