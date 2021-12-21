import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render(){
    return (
      <div className="SelectedBeast">
        <Modal show = {this.props.showBeast} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Title</Modal.Title>
            <Modal.Body>Description</Modal.Body>
            <Modal.Img variant="top" src={this.props.beastObj.image_url} alt={this.props.beastObj.keyword} />
          </Modal.Header>
          <Modal.Footer>
            <Button variant="info" onClick = {this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default SelectedBeast;