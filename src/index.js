import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./components/board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to start game";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// When a list is re-rendered, React takes each list item’s key and searches the previous list’s items for a matching key.
// If the current list has a key that didn’t exist before, React creates a component. If the current list is missing a key
// that existed in the previous list, React destroys the previous component. If two keys match, the corresponding component is moved.
// Keys tell React about the identity of each component which allows React to maintain state between re-renders. If a component’s
// key changes, the component will be destroyed and re-created with a new state.

// key is a special and reserved property in React (along with ref, a more advanced feature). When an element is created,
// React extracts the key property and stores the key directly on the returned element. Even though key may look like it belongs
// in props, key cannot be referenced using this.props.key. React automatically uses key to decide which components to update.
// A component cannot inquire about its key.

// If no key is specified, React will present a warning and use the array index as a key by default. Using the array index as a
// key is problematic when trying to re-order a list’s items or inserting/removing list items. Explicitly passing key={i} silences
// the warning but has the same problems as array indices and is not recommended in most cases.

// Keys do not need to be globally unique; they only need to be unique between components and their siblings.
