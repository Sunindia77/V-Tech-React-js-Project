import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from '.././src/components/Navbar/Navbar';
import Footer from '.././src/components/Footer/Footer';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
     <Router>
       <Navbar/>
     
       <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/about' component={About} />
          <Route  path='/services' component={Services} />
          <Route  path='/portfolio' component={Portfolio} />
          <Route  path='/contact' component={Contact} />
       </Switch>
       <Footer/>
     </Router>

  </div>
  )
}

export default App;
