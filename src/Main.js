import React from 'react';
import './App.css';
import './App'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {

    return (
      <>
        <p>Horned Animals</p>
        <Container className="main">
          <Row xs={1} md={2} lg={4} className="g-4">
            {this.props.beastImg.map((beast, idx) => (

              <HornedBeasts beastObj={beast} key={idx} showBeasts={this.props.displayBeasts} />

            ))}
          </Row>
        </Container>

      </>
    )
  }
};

export default Main;
