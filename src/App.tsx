import React from 'react';
import './App.css';
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer';
import Dashboard from './Components/dashboard/Dashboard';

function App() {
  return (
    <div >
      <Header></Header>
      <Dashboard/>
      <Footer></Footer>
      </div>
  );
}

export default App;
