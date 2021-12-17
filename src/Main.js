import React from 'react';
import './App.css';
import './App'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HornedBeasts from './HornedBeasts';

class Main extends React.Component {
  render() {

    return (
      <>
        <p>Horned Animals</p>
        <Container className="main">
          <Row xs={1} md={2} lg={4} className="g-4">
            {this.props.beastImg.map((beast, idx) => (
              <Col>
                <HornedBeasts beastObj={beast} key={idx} />
              </Col>
              ))}
          </Row>
        </Container>

      </>
    )
  }
};

export default Main;
