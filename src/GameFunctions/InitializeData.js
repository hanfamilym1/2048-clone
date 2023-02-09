export const InitializeGame = () => {
    const board = Array(16).fill(0)

    const randomIndex = Math.floor(Math.random() * board.length)
    const randomNumbers = [2, 4]
    const randomNumber = randomNumbers[Math.floor(Math.random() * 2)]
    board[randomIndex] = randomNumber

    return board
}
