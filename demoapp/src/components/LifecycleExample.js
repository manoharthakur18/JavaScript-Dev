import React, { Component } from "react";

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("componentDidMount: Component is mounted to the DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component is updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to unmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Checking if component should update");
    return true;
  }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     console.log(
//       "getDerivedStateFromProps: Calculating new state based on props"
//     );
//     return null;
//   }

  // componentDidCatch(error, info) {
  //   console.log('componentDidCatch: Handling errors');
  // }

  // static getDerivedStateFromError(error) {
  //   console.log('getDerivedStateFromError: Handling errors and updating state');
  //   return null;
  // }

  render() {
    console.log("render: Rendering the component");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleExample;
