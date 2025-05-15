import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './commonComponents/Navbar/Navbar';
import Preloader from './commonComponents/Preloader/Preloader';
import Home from './home/Home';
import Footer from './commonComponents/Footer/Footer';
import Contact from './Contact/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/contact-us' element={<Contact/>}/>
          </Routes>
          <Footer/>
        </Router>
      )}
    </div>
  );
}

export default App;
