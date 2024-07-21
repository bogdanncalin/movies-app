import Navbar from './components/Navbar';
import Search from './components/Search';
import Carousel from './components/Carousel';
import Recommended from './components/Recommended';
import './App.css';

function App() {

  return (
    // React fragment -> can also be used as React.Fragment to encapsulate all the siblings components
    // <React.fragment> ... </React.Fragment>, import React from 'react'
    // or <main> and </main>, but it might mess the structure and the css files
    
    <>
      <Navbar />
      <Search />
      <Carousel />
      <Recommended />
    </>
  );
}

export default App;
