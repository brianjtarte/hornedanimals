import React from 'react';
import './App.css';
import './App'
import Form from 'react-bootstrap/Form'
import beastData from './data.json'


class BeastForm extends React.Component {

  handleChange = (e) => {
    console.log(e.target.value);
    const beastSelection = e.target.value;
    console.log(beastSelection);
    let updatedBeasts;

    if (beastSelection === "two") {
      updatedBeasts = beastData.filter(num => num.horns === 2);
      console.log(updatedBeasts);
      this.props.updateBeastGallery(updatedBeasts);
    } else if (beastSelection === "one") {
      updatedBeasts = beastData.filter(num => num.horns === 1);
      this.props.updateBeastGallery(updatedBeasts);
    } else if (beastSelection === "three") {
      updatedBeasts = beastData.filter(num => num.horns === 3);
      this.props.updateBeastGallery(updatedBeasts);
    } else if (beastSelection === "100") {
      updatedBeasts = beastData.filter(num => num.horns === 100);
      this.props.updateBeastGallery(updatedBeasts);
    } else {
      this.props.updateBeastGallery(beastData);
    }
  }
  render() {
    return (
      <div className="BeastForm">

        <Form>
          <Form.Label>Beast Selector</Form.Label>
          <br />
          <Form.Select onChange={this.handleChange}>
            <option value="none">Make a Selection</option>
            <option value="one">1 Horn</option>
            <option value="two">2 Horns</option>
            <option value="three">3 Horns</option>
            <option value="100">100 Horns</option>
          </Form.Select>
        </Form>

      </div>
    );
  }
}

export default BeastForm;