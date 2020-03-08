import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile/:name" component={Profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
