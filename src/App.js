import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects.js';
import About from './components/About.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />

        <div className="navigation">
          <div className="navigation-sub">

            <Link to="/about" className="item">About</Link>
            <Link to="/" className="item">Projects</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
