import { BrowserRouter, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Projects from './components/Projects.js';
import About from './components/About.js';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Container fluid>
          <Navbar bg="light" expand='lg'>
            <Navbar.Brand>Stefan Carnahan</Navbar.Brand>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Navbar>
        </Container>


        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />

      </div>
    </BrowserRouter>
  );
}

export default App;
