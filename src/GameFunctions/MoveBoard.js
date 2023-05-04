const filterZero = (row) => row.filter((num) => num !== 0);

function slide(row) {
  // [0,2,2,2]
  row = filterZero(row); // get rid of zeros
  // slide
  let score = 0;
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
      score += row[i];
    }
  }

  row = filterZero(row); // [4,2]

  const column = 4;

  while (row.length < column) {
    row.push(0);
  }
  return { points: score, row };
}

export const left = (actualBoard) => {
  let newObj = {
    board: actualBoard,
    points: 0,
  };
  for (const rowIndex in actualBoard) {
    // if every number is 0, skip
    if (!actualBoard[rowIndex].every((num) => num === 0)) {
      console.log("not skipped", actualBoard[rowIndex]);
      const { row, points } = slide(actualBoard[rowIndex]);
      actualBoard[rowIndex] = row;
      newObj = {
        board: actualBoard,
        points: newObj.points + points,
      };
    }
  }
  return newObj;
};

export const right = (actualBoard) => {
  let newObj = {
    board: actualBoard,
    points: 0,
  };

  for (const rowIndex in actualBoard) {
    // if every number is 0, skip
    if (!actualBoard[rowIndex].every((num) => num === 0)) {
      let row = actualBoard[rowIndex];
      row.reverse();
      const { row: newRow, points } = slide(row);
      actualBoard[rowIndex] = newRow.reverse();
      newObj = {
        board: actualBoard,
        points: newObj.points + points,
      };
    }
  }
  return newObj;
};
