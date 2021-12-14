import React from 'react';

class HornedBeasts extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <p>{this.props.imageUrl}</p>
        <p>{this.props.description}</p>
      </>
    )
  }
};

export default HornedBeasts;