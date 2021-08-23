import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Search from "./pages/Search";
import { Switch, Route, Link } from "react-router-dom";
import "./styles.css";
export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/search/:keyword">
          <Search />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}
