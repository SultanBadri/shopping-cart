import React from "react";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { HashRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </HashRouter>
  );
};

export default App;
