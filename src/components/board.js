import React from "react";
import Square from "./square";

class Board extends React.Component {
  // To collect data from multiple children, or to have two child components communicate with each other,
  // you need to declare the shared state in their parent component instead. The parent component can
  // pass the state back down to the children by using props; this keeps the child components in sync with
  // each other and with the parent component.

  //   Add a constructor to the Board and set the Board’s initial state to contain an array of 9 nulls corresponding to the 9 squares:

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       squares: Array(9).fill(null),
  //       xIsNext: true
  //     };
  //   }

  //   REmove the constructor and pass squares as props

  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (this.props.color !== nextProps.color) {
  //       return true;
  //     }
  //     if (this.state.squares !== nextState.squares) {
  //       return true;
  //     }
  //     return false;
  //   }

  renderSquare(i) {
    //  to update the Board’s state from Square: pass down a function from the Board to the Square, and we’ll have
    // Square call that function when a square is clicked

    // onClick prop is a function that Square can call when clicked
    //  In React, it’s conventional to use on[Event] names for props which represent events and handle[Event] for the methods which handle the events.
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
