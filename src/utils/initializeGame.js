const initializeGame = () => {
  const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const numRows = board.length;
  const numCols = board[0].length;
  const randomRowIndex = Math.floor(Math.random() * numRows);
  const randomColIndex = Math.floor(Math.random() * numCols);
  const randomNumbers = [2, 4];
  const randomNumber = randomNumbers[Math.floor(Math.random() * 2)];
  board[randomRowIndex][randomColIndex] = randomNumber;

  return board;
};

export default initializeGame;
