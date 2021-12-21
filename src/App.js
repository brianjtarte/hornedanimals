import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayBeast: false,
      selectedBeast: {}
    }
  }

  showBeast = (name) => {
    this.setState({displayBeast: true})
    ;
  }

  onHide = () => {
    this.setState({displayBeast: false});
  }
  render() {
    return (
      <Container className="App">
        <Header />
        <Main beastImg={beastData} showBeast={this.showBeast}/>
        <SelectedBeast show={this.state.displayBeast} onHide={this.onHide}/>
        <Footer />
      </Container>
    );
  }
}

export default App;
