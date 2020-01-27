// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// class Square extends React.Component {
//   // First, we’ll add a constructor to the class to initialize the state
//   // In JavaScript classes, you need to always call super when defining the constructor
//   // of a subclass. All React component classes that have a constructor should start it with a super(props) call.

//   //   Delete the constructor from Square because Square no longer keeps track of the game’s state

//   //   constructor(props) {
//   //     super(props);
//   //     this.state = {
//   //       value: null
//   //     };
//   //   }

//   //   By calling this.setState from an onClick handler in the Square’s render method, we tell React to re-render
//   // that Square whenever its <button> is clicked. After the update, the Square’s this.state.value will be 'X'
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
//   //   When you call setState in a component, React automatically updates the child components inside of it too!!!
// }

// In React, function components are a simpler way to write components that only contain a render method and
// don’t have their own state. Instead of defining a class which extends React.Component, we can write a function
// that takes props as input and returns what should be rendered.

import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
