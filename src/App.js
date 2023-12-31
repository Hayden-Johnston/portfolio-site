// Import dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import AppBar from './components/AppBar';
import './App.css';

// Import Pages
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import PortfolioPage from './pages/PortfolioPage.js';
import ContactPage from './pages/ContactPage.js';

// Define the function that renders the content in routes using State.
function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1>
          HaydenGG
        </h1> */}
        <AppBar />
      </header>
      <main>
        <section>
          <Routes> 
            <Route path="/" element={<HomePage/>} />
            <Route path="/About" element={<AboutPage/>} />
            <Route path="/Portfolio" element={<PortfolioPage/>} />
            <Route path="/Contact" element={<ContactPage/>} />
          </Routes>
        </section>
      </main>
      {/* <footer>
        <p><cite>&copy; 2023 Hayden Johnston</cite></p>
      </footer> */}
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
