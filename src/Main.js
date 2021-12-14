import React from 'react';
import './App.css';
import './App'
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {
    return (
      <>
        <p>Horned Animals</p>
        <HornedBeasts title={'Horned Beast'}
         imgUrl={'https://images.pexels.com/photos/460223/pexels-photo-460223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
         description={'A hellacious horned animal'}/>
          <HornedBeasts title={'Horned Beast'}
         imgUrl={'https://images.pexels.com/photos/9906453/pexels-photo-9906453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
         description={'Scurry Furry Animal'}/>

      
      </>
    )
  }
};

export default Main;