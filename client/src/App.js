import './App.css';
import { Route } from "react-router-dom"
import Burger from "./components/Nav/Burger"
import Home from "./components/home"
import Projects from "./components/projects"

function App() {
  return (
    <div className="App proximity">
      <Burger/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/" component={Projects}/>
    </div>
  );
}

export default App;