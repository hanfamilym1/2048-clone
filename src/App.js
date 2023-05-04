import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import initializeGame from "./GameFunctions/initializeGame.js";
import { left, right, down, up } from "./GameFunctions/moveBoard.js";
import { addRandomPieces } from "./GameFunctions/addItems.js";
import { checkGame } from "./GameFunctions/checkGame.js";
import Button from "@mui/material/Button";
// import ReplayIcon from "@material-ui/icons/Replay";
// import { withStyles } from "@material-ui/styles";
// import { withStyles } from "@material-ui/styles";
// import Button from "@material-ui/core/Button";
import "./App.css";

// const ColorButton = withStyles((theme) => ({
//   root: {
//     color: `#fff`,
//     backgroundColor: `#bbada0`,
//     "&:hover": {
//       backgroundColor: `#bbada0`,
//     },
//   },
// }))(Button);

const App = () => {
  const [actualGame, setActualGame] = useState(initializeGame());
  const [score, setScore] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    if (score !== 0) {
      let isFinished = checkGame(actualGame);
      console.log(isFinished);
      if (isFinished.won) {
        setIsWon(true);
        setIsEnd(false);
      } else {
        isFinished.end ? setIsEnd(true) : setIsEnd(false);
      }
    }
  }, [score, actualGame]);

  const startGame = () => {
    setScore(0);
    setActualGame(initializeGame());
    setIsWon(false);
    setIsEnd(false);
  };

  const checkEqual = (first, second) => {
    if (JSON.stringify(first) === JSON.stringify(second)) {
      return true;
    } else {
      return false;
    }
  };

  const handleKeyPress = (e) => {
    if (!isEnd) {
      let moveBoard;
      let newBoard;
      let isEqual;
      switch (e.keyCode) {
        case 37:
          console.group("left");
          moveBoard = left(actualGame);
          setScore((currPoints) => (currPoints += moveBoard.points));
          newBoard = addRandomPieces(moveBoard.board);
          setActualGame(newBoard);
          console.groupEnd();
          break;
        case 38:
          console.log("up");
          break;
        case 39:
          console.group("right");
          moveBoard = right(actualGame);
          setScore((currPoints) => (currPoints += moveBoard.points));
          newBoard = addRandomPieces(moveBoard.board);
          setActualGame(newBoard);
          console.groupEnd();
          break;
        case 40:
          console.log("down");
          break;
        default:
          return null;
      }
    }
  };
  return (
    <div
      className="app"
      onKeyUp={(event) => handleKeyPress(event)}
      tabIndex={0}
    >
      <div className="header">
        <div className="scoreBoard">
          <h3>Score</h3>
          <p>{score}</p>
        </div>
        <Button variant="contained" onClick={() => startGame()}>
          New
        </Button>
        {/* <ColorButton variant="contained" onClick={() => startGame()}>
          New
        </ColorButton> */}
      </div>
      <div className="game-board">
        {isWon ? (
          <div className="end">
            <h3>YOU WON</h3>
            <Button variant="contained" onClick={() => startGame()}>
              Play Again
              {/* <ReplayIcon /> Play Again */}
            </Button>
          </div>
        ) : null}
        {isEnd ? (
          <div className="end">
            <h3>Game Over</h3>
            <Button variant="contained" onClick={() => startGame()}>
              Try Again
              {/* <ReplayIcon /> Try Again */}
            </Button>
          </div>
        ) : null}
        <Board actualGame={actualGame} />
      </div>
    </div>
  );
};

export default App;
