import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPage from './components/NavPage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [navLinkSelected, setNavLinkSelected] = useState('Caca');

  const renderPage = () => {
    switch (navLinkSelected) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
         return <Portfolio />;
      case 'Contact':
         return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
    <NavPage navLinkSelected={navLinkSelected} setNavLinkSelected={setNavLinkSelected}>
    </NavPage>
    <main>
            {}
            <div>{renderPage(navLinkSelected)}</div>
    </main>
    <Footer></Footer>
    </div>
);
}

export default App;
