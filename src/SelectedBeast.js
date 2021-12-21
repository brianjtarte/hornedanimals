import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render() {
    return (
      <div className="SelectedBeast">
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            <Modal.Body>
              <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.keyword} />
                <Card.Body>
                <Card.Title>{this.props.selectedBeast.title}</Card.Title>
                <Card.Text>
                  {this.props.selectedBeast.description}
                </Card.Text>
                <Card.Text>
                  
                </Card.Text>

                </Card.Body>
              </Card>
            </Modal.Body>

          </Modal.Header>
          <Modal.Footer>
            <Button variant="info" onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default SelectedBeast;