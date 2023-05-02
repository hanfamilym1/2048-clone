import React, { useState, useEffect } from "react";
import { InitializeGame } from "./GameFunctions/InitializeData";
import { left, right, down, up } from "./GameFunctions/MoveBoard";
import { addRandomPieces } from "./GameFunctions/AddItems";
import { checkGame } from "./GameFunctions/CheckGame";
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
  const [actualGame, setActualGame] = useState(InitializeGame());
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
    setActualGame(InitializeGame());
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

  const showBoard = actualGame.map((piece, index) => {
    var actualName;
    switch (piece) {
      case 0:
        actualName = `zero piece`;
        break;
      case 2:
        actualName = `two piece`;
        break;
      case 4:
        actualName = `four piece`;
        break;
      case 8:
        actualName = `eight piece`;
        break;
      case 16:
        actualName = `sixteen piece`;
        break;
      case 32:
        actualName = `thirtytwo piece`;
        break;
      case 64:
        actualName = `sixtyfour piece`;
        break;
      case 128:
        actualName = `onetwentyeight piece`;
        break;
      case 256:
        actualName = `twofiftysix piece`;
        break;
      case 512:
        actualName = `fivetwelve piece`;
        break;
      case 1024:
        actualName = `tentwentyfour piece`;
        break;
      case 2048:
        actualName = `twentyfortyeight piece`;
        break;
      default:
        actualName = `piece`;
    }

    return (
      <div key={index} className={actualName}>
        {piece === 0 ? null : piece}
      </div>
    );
  });

  const handleKeyPress = (e) => {
    if (!isEnd) {
      let moveBoard;
      let newBoard;
      let isEqual;
      switch (e.keyCode) {
        case 37:
          console.log("left");
          moveBoard = left(actualGame);
          setScore((currPoints) => (currPoints += moveBoard.points));
          newBoard = addRandomPieces(moveBoard.board);
          setActualGame(newBoard);
          break;
        case 38:
          console.log("up");
          break;
        case 39:
          console.log("right");
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
      className="App"
      onKeyDown={(event) => handleKeyPress(event)}
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
        {showBoard}
      </div>
    </div>
  );
};

export default App;
