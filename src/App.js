import React from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import beastData from './data.json';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main beastImg={beastData}/>
        <Footer />
      </div>
    );
  }
}

export default App;
