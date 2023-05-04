import React from "react";

const Board = ({ actualGame }) => {
  console.log(actualGame);
  return actualGame.map((row, index) => {
    return row.map((piece, colIndex) => {
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
        <div key={index + colIndex} className={actualName}>
          {piece === 0 ? null : piece}
        </div>
      );
    });
  });
};

export default Board;
