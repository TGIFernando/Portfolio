import './App.css';
import Home from "./components/home"
import Projects from "./components/projects"
function App() {
  return (
    <div className="App proximity">
      <div className="snap">
        <Home/>
      </div>
      <div className="snap">
        <Projects/>
      </div>
    </div>
  );
}

export default App;