import React from 'react';
import './App.css';
import './App'
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    return (
      <>
        <p>Horned Animals</p>
        <HornedBeasts title/>
        <HornedBeasts imgUrl/>
        <HornedBeasts description/>

      
      </>
    )
  }
};

export default Main;