const changeLeftRow = (row) => {
  // start from the end of the row and add if equals to the previous one
  let points = 0;
  for (let i = row.length-1; i>=0; i--){
    if(row[i] === 0){
      row.splice(i, 1)
    }
  }
  for (let i = row.length-1; i>0; i--){
    if(row[i] === row[i-1]){
      row[i-1] = row[i-1] * 2
      points += row[i-1]
      row.splice(i, 1)
    }
  }
  for (let i = row.length-1; i>=0; i--){
    if(row[i] === 0){
      row.splice(i, 1)
    }
  }
  while(row.length < 4){
    row.push(0)
  }
  return {points, row}
} 

const changeRightRow = (row) => {

}

const changeUpCol = (col) => {
   
} 

const changeDownCol = (col) => {
  
}


export const left = (actualBoard) => {
    let newBoard = []
    let points1 = 0;
    for (let i = 0; i<16; i+=4){
      let row1 = actualBoard.slice(i, i+4);
      let {points, row} = changeLeftRow(row1)
      points1+=points
      newBoard.push(...row)
    }
    console.log(newBoard)
    return {points: points1, board: newBoard}
  }
  
  export const right = (actualBoard) => {
    let newBoard = []
    let points1 = 0;
    for (let i = 0; i<4; i++){
        let row1 = actualBoard.filter(piece => piece.row === i)
        let {points, row} = changeRightRow(row1)
        points1+=points
        newBoard.push(...row)
    }
    return {points: points1, board: newBoard}
}

export const up = (actualBoard) => {
    let newBoard = []
    let points1 = 0;
    for (let i = 0; i<4; i++){
        let col1 = actualBoard.filter(piece => piece.col === i)
        let {points, col} = changeUpCol(col1)
        points1 += points
        newBoard.push(...col)
    }
    newBoard.sort((a,b) => a.row - b.row)
    return {points: points1, board: newBoard}
}

export const down = (actualBoard) => {
    let newBoard = []
    let points1 = 0;
    for (let i = 0; i<4; i++){
        let col1 = actualBoard.filter(piece => piece.col === i)
        let {points, col} = changeDownCol(col1)
        points1 += points
        newBoard.push(...col)
    }
    newBoard.sort((a,b) => a.row - b.row)
    return {points: points1, board: newBoard}
}