const boardExample = [
  {
      "row": 0,
      "col": 0,
      "value": 1024
  },
  {
      "row": 0,
      "col": 1,
      "value": 1024
  },
  {
      "row": 0,
      "col": 2,
      "value": 64
  },
  {
      "row": 0,
      "col": 3,
      "value": 64
  },
  {
      "row": 1,
      "col": 0,
      "value": 64
  },
  {
      "row": 1,
      "col": 1,
      "value": 32
  },
  {
      "row": 1,
      "col": 2,
      "value": 32
  },
  {
      "row": 1,
      "col": 3,
      "value": 0
  },
  {
      "row": 2,
      "col": 0,
      "value": 0
  },
  {
      "row": 2,
      "col": 1,
      "value": 0
  },
  {
      "row": 2,
      "col": 2,
      "value": 0
  },
  {
      "row": 2,
      "col": 3,
      "value": 4
  },
  {
      "row": 3,
      "col": 0,
      "value": 2
  },
  {
      "row": 3,
      "col": 1,
      "value": 0
  },
  {
      "row": 3,
      "col": 2,
      "value": 0
  },
  {
      "row": 3,
      "col": 3,
      "value": 0
  }
]

export const InitializeGame = () => {
    let board = [...boardExample]
    // let rows = 4;
    // let columns = 4;
    // let randomNumbers = [2,4]
    // let randomRowNum1 = Math.floor(Math.random()*4);
    // let randomRowNum2 = Math.floor(Math.random()*4);
    // let randomColNum1 = Math.floor(Math.random()*4);
    // let randomColNum2 = Math.floor(Math.random()*4);
    // let randomNumber1 = randomNumbers[Math.floor(Math.random()*2)]
    // let randomNumber2 = randomNumbers[Math.floor(Math.random()*2)]
    // if(randomRowNum1 === randomRowNum2 && randomColNum1 === randomColNum2){
    //   randomRowNum2 = Math.floor(Math.random()*4)
    //   randomColNum2 = Math.floor(Math.random()*4)
    // }
    // for (let i=0; i<rows; i++){
    //     for(let j=0; j<columns; j++){
    //       let obj;
    //         if(i === randomRowNum1 && j === randomColNum1){
    //            obj = {
    //                   row: randomRowNum1,
    //                   col: randomColNum1,
    //                   value: randomNumber1
    //                   }
    //           board.push(obj)
    //         } else if (i === randomRowNum2 && j === randomColNum2){
    //             obj = {
    //                   row: randomRowNum2,
    //                   col: randomColNum2,
    //                   value: randomNumber2
    //                   } 
    //           board.push(obj)
    //         } else {
    //             obj = {
    //                   row: i,
    //                   col: j,
    //                   value: 0
    //                   } 
    //           board.push(obj)
    //         }
    //     }
    // }
    return board
}
