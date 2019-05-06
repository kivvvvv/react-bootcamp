import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 1
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };

    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    const { ncols, nrows, chanceLightStartsOn } = this.props;
    const board = [];

    // TODO: create array-of-arrays of true/false values
    // From how we access the 2D-array structure, we need to go through its row first
    for (let iRow = 0; iRow < nrows; iRow++) {
      let row = [];
      // Once in the row, we fill each column
      for (let iCol = 0; iCol < ncols; iCol++) {
        row.push(Math.random() < chanceLightStartsOn ? true : false);
      }

      board.push(row);
    }

    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [x, y] = coord.split("-").map(Number);

    function flipCell({ x, y }) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[x][y] = !board[x][y];
      }
    }

    // TODO: flip this cell and the cells around it
    const currentCellCoord = { x, y };
    const topCellCoord = { x: x - 1, y: y };
    const rightCellCoord = { x: x, y: y + 1 };
    const bottomCellCoord = { x: x, y: y - 1 };
    const leftCellCoord = { x: x + 1, y: y };

    flipCell(currentCellCoord);
    flipCell(topCellCoord);
    flipCell(rightCellCoord);
    flipCell(bottomCellCoord);
    flipCell(leftCellCoord);

    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({
      board,
      hasWon: board.every(col => col.every(row => row))
    });
    // this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */

  render() {
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    if (this.state.hasWon) return <p>You win!</p>;
    // make table board
    // TODO
    return (
      <table>
        <tbody>
          {this.state.board.map((row, iRow) => (
            <tr key={iRow}>
              {row.map((col, iCol) => {
                const coord = `${iRow}-${iCol}`;
                return (
                  <Cell
                    isLit={col}
                    key={coord}
                    coord={coord}
                    flipCellsAround={this.flipCellsAround}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Board;
