import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      Toggle: false
    };
  }

  handleIncrement = () => {
    if (this.state.Toggle) {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      Toggle: !prevState.Toggle
    }));
  };

  componentDidMount() {
    console.log('This is Simple Component');
  }

  render() {
    console.log('This is Simple Component');
    return (
      <div>
        <h2>Simple Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleIncrement}>Counter</button>
        
      </div>
    );
  }
}

export default SimpleCounterComponent;
