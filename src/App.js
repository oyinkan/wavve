import React from 'react';
import './../src/css/style.css';
import './../src/css/smallerscreen.css';
import './../src/fortawesome/css/all.min.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
