import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Cuerpo from './cuerpo'
import Footer from './footer';
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Cuerpo/>
    <Footer/>
  </React.StrictMode>
);

export default main;