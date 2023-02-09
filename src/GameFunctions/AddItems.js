export const addRandomPieces = (actualBoard) => {
    const returnedBoard = [...actualBoard]
    const randomNumbers = [2, 4]
    
    // find all the indexes of the board that are 0
    const zeroIndexes = actualBoard.reduce((acc, curr, index) => {
        if(curr === 0){
            acc.push(index)
        }
        return acc
    }, [])

    console.log(zeroIndexes)
    // pick a random index from the zeroIndexes array
    const randomIndex = zeroIndexes[Math.floor(Math.random() * zeroIndexes.length)]
    // pick a random number from the randomNumbers array
    const randomNumber = randomNumbers[Math.floor(Math.random() * 2)]
    // add the random number to the random index
    returnedBoard[randomIndex] = randomNumber
    return returnedBoard
}