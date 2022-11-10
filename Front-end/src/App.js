import React from 'react'
import './App.css';
import { BrowserRouter } from "react-router-dom"
import Header from './Header';
import Routers from './Routers';
import Footer from './Footer';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routers />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
