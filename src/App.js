import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navigation />
        
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

      </div>
    </BrowserRouter>
  );
}

export default App;
