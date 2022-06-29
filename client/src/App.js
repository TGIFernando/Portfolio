import "./App.css";
import { React, useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import PrivateRoute from "./Utility/PrivateRoute";

import Burger from "./components/Nav/Burger";
import Home from "./components/home";
import Projects from "./components/projects";
import Contact from "./components/contact/contact";
import Login from "./components/login";
import View from "./components/contact/viewContact";
import Resume from "./components/resume/resume";

function App() {
  const [logg, setLogg] = useState(false);
  let location = useLocation();

  useEffect(() => {
    if (window.localStorage.id === "1") {
      setLogg(true);
    } else {
      setLogg(false);
    }
  }, [location.pathname]);

  return (
    <div className="App proximity">
      <Burger logg={logg} />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Projects} />
      {/* <Route exact path="/" component={Resume} /> */}
      <Route exact path="/" component={Contact} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/contactme" component={View} />
    </div>
  );
}

export default App;
