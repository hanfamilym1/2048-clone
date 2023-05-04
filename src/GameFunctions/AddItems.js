export const addRandomPieces = (actualBoard) => {
  const returnedBoard = [...actualBoard];
  const randomNumbers = [2, 4];

  // find all the indexes of the board that are 0
  const zeroIndexes = actualBoard.reduce((acc, currRow, rowIndex) => {
    console.log(currRow);
    currRow.forEach((currCol, colIndex) => {
      if (currCol === 0) {
        acc.push([rowIndex, colIndex]);
      }
    });
    return acc;
  }, []);

  console.log("this is the zero", zeroIndexes);
  // pick a random index from the zeroIndexes array
  const randomIndex =
    zeroIndexes[Math.floor(Math.random() * zeroIndexes.length)];

  console.log("randomIndex", randomIndex);
  // const numRows = board.length;
  // const numCols = board[0].length;
  // const randomRowIndex = Math.floor(Math.random() * numRows);
  // const randomColIndex = Math.floor(Math.random() * numCols);
  // pick a random number from the randomNumbers array
  const randomNumber = randomNumbers[Math.floor(Math.random() * 2)];
  // add the random number to the random index
  returnedBoard[randomIndex[0]][randomIndex[1]] = randomNumber;
  return returnedBoard;
};
