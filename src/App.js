import React from 'react';
import Navbar from './navbar';
import Newitem from './newitem';
import Sell from './Sell';
import Explore from './Explore';
import Topseller from './Topseller';
import Footer from './Footer';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Newitem />
        <Sell />
        <Explore />
        <Topseller />
      </main>

      <Footer />
    </>
  );
}

export default App;
