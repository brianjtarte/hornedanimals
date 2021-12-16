import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      "beastVote": 0
    }
  }
  handleClick = () => {
    this.setState({
      beastVote: this.beastVote + 1
    })
  };
  
  render() {

    return (
      <>
        <Card style={{ width: '18rem' }} onClick={this.handleClick}>
          <Card.Img variant="top" src={this.props.beastObj.image_url} alt={this.props.beastObj.keyword} />
          <Card.Body>
            <Card.Title>{this.props.beastObj.title}</Card.Title>
            <Card.Text>
            {this.props.beastObj.description}
            {this.state.beastVote}
            </Card.Text>
          </Card.Body>
        </Card>



      </>
    )
  }
};


export default HornedBeasts;