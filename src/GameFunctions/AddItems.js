export const addRandomPieces = (actualBoard) => {
    let newBoard = actualBoard.filter(piece => piece.value === 0)
    let randomNumbers = [2,4]
    let randomNumber1 = randomNumbers[Math.floor(Math.random()*2)]
    // let randomNumber2 = randomNumbers[Math.floor(Math.random()*2)]
    let randomI1 = Math.floor(Math.random()*newBoard.length);
    // let randomI2 = Math.floor(Math.random()*newBoard.length);
    // if(randomI1 === randomI2){
    //     randomI2 = Math.floor(Math.random()*newBoard.length)
    // }
    for (let i =0; i<newBoard.length; i++){
        if(i === randomI1){
            newBoard[i].value = randomNumber1
        } 
    }
    console.log(newBoard)
    let addedItems = newBoard.filter(piece => piece.value !== 0)
    let returnedBoard = [];
    for (let j=0; j<addedItems.length; j++){
        returnedBoard = actualBoard.map(piece => {
            if(addedItems[j].row === piece.row && addedItems[j].col === piece.col){
                return addedItems[j]
            } else {
                return piece
            }
        })
    }
    // console.log(actualBoard)
    // console.log(returnedBoard)
    return returnedBoard
}