import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App()
{
    
    return(
        <>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </>
    )
}
export default App;