export const checkGame = (actualBoard) => {
    let values = actualBoard.filter(piece => piece.value !== 0)
    console.log(values.length)
    let justValues = values.map(piece => piece.value)
    if(justValues.includes(2048)){
        return { won: true, end: false}

    }else {
        if(values.length === 16){
            let canStillMoveLeftOrRight = false;
            let canStillMoveUpOrDown = false;
            for (let i=0; i<4; i++){
                let row = actualBoard.filter(piece => piece.row === i).map(piece => piece.value)
                let col = actualBoard.filter(piece => piece.col === i).map(piece => piece.value)
                for(let j=0; j<4; j++){
                    if(row[j] === row[j+1] && j+1 !== 4){
                        canStillMoveLeftOrRight = true
                    }
                    if(col[j] === col[j+1] && j+1 !==4){
                        canStillMoveUpOrDown = true
                    }
                }
            }
            if(canStillMoveLeftOrRight || canStillMoveUpOrDown){
                return {won: false, end: false}
            } else {
                return {won: false, end: true}
            }
        } else {
            return {won: false, end: false}
        }
    }
}