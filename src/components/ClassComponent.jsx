import React from "react";

class ClassComponent extends React.Component {
  state = {
    message: "Class Component",
    time: new Date().toString().split("GMT+0530 (India Standard Time)"),
  };

  componentDidMount() {
    this.interval = setInterval(this.showDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  showDate = () => {
    this.setState({
      time: new Date().toString().split("GMT+0530 (India Standard Time)"),
    });
  };
  render() {
    return (
      <div class="class-component-container">
        <h1>Class Component</h1>
        <p>{this.state.time}</p>
        <h1>What is React?</h1>
        <p>
          React, sometimes referred to as a frontend JavaScript framework, is a
          JavaScript library created by Facebook. React is a tool for building
          UI components.
        </p>
        <h1>How does React Work?</h1>
        <p>
          React creates a VIRTUAL DOM in memory. Instead of manipulating the
          browser's DOM directly, React creates a virtual DOM in memory, where
          it does all the necessary manipulating, before making the changes in
          the browser DOM.
        </p>
      </div>
    );
  }
}

export default ClassComponent;
