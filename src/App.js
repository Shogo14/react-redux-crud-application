import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
    // setStateが呼び出されると、render()も呼び出されるので再レンダリングが走る
  };

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
    // setStateが呼び出されると、render()も呼び出されるので再レンダリングが走る
  };
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
