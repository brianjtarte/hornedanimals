import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import beastData from './data.json';
import SelectedBeast from './SelectedBeast';
import BeastForm from './BeastForm';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showBeast: false,
      selectedBeast: {},
      gallery: beastData

    };
  };

  updateBeastGallery = (filteredBeasts) => {
    this.setState({gallery: filteredBeasts});
  }

  displayBeasts = (name) => {
    const selectedBeast = beastData.find(beastObj => beastObj.title === name);
    this.setState({showBeast: true,
    selectedBeast: selectedBeast});
  }
  onHide = () => {
    this.setState({showBeast: false});
  }

  
  render() {
    return (
      <Container className="App">
        <Header />
        <BeastForm updateBeastGallery={this.updateBeastGallery}/>
        <Main beastImg={this.state.gallery} displayBeasts={this.displayBeasts}/>
        <SelectedBeast show={this.state.showBeast} onHide={this.onHide} selectedBeast={this.state.selectedBeast}/>
        <Footer />
      </Container>
    );
  }
}

export default App;
