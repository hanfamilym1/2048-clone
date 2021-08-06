const changeLeftRow = (row) => {
    let rowValues = row.filter(piece => piece.value !== 0).map(piece => piece.value)
        if(Array.isArray(rowValues) && rowValues.length > 0){
            if(rowValues.length === 1){
              let value = rowValues[0];
              let newRow = row.map((piece, index) => {
                  let newPiece = {...piece}
                if(index === 0){
                  newPiece.value = value;
                } else {
                  newPiece.value = 0;
                }
                return newPiece
              })
              return {points: 0, row: newRow}
            } else {
              // find matching numbers and then add if adjacent once
              let newValues = [...rowValues]
              let equalValues = [...row]
              if(equalValues.length === 4 && equalValues.every(item => item.value === equalValues[0].value)){
                equalValues[0].value = equalValues[0].value*2
                equalValues[1].value = equalValues[1].value*2
                equalValues[2].value = 0
                equalValues[3].value = 0
                return {points: equalValues[0].value*4, row: equalValues}
              } else { 
                // [4,4] 2
                  let newPoints = 0;
                  for (let i = 0; i<newValues.length; i++){
                    let newI = i + 1
                    if(newI < newValues.length){
                      if(newValues[i] === newValues[newI]){
                        newValues[i] = newValues[i] *2;
                        newPoints += newValues[i]
                        newValues[newI] = 0;
                      } else if (newValues[i] === 0 && newValues[newI] > 0) {
                        newValues[i] = newValues[newI]
                        newValues[newI] = 0
                      } 
                    }
                  }
                  let newValues2 = []
                  let newLength = newValues.length - 4
                  if (newLength !== 0) {
                    let addedRows = []
                    for(let i=0; i<newLength*-1; i++){
                      addedRows.push(0)
                    }
                    newValues2 = [ ...newValues, ...addedRows]
                  } else {
                    newValues2 = [...newValues]
                  }
                  let newRow = [...row]
                  for(let i =0; i<newRow.length; i++){
                    for(let j =0; j<newValues2.length; j++){
                      let newPiece = {...row[i]}
                      if(i === j){
                          newPiece.value = newValues2[j]
                          newRow.splice(i, 1, newPiece)
                      } 
                    }
                  }
                  return {points: newPoints, row: newRow }
                }
              }
          } else {
            return {points: 0, row: row}
          }
    } 

const changeRightRow = (row) => {
  let rowValues = row.filter(piece => piece.value !== 0).map(piece => piece.value)
  if(Array.isArray(rowValues) && rowValues.length > 0){
    if(rowValues.length === 1){
      let value = rowValues[0];
      let newRow = row.map((piece, index) => {
          let newPiece = {...piece}
        if(index === 3){
          newPiece.value = value;
        } else {
          newPiece.value = 0;
        }
        return newPiece
      })
      return {points: 0, row: newRow}
    } else {
      // find matching numbers and then add if adjacent once
      let newValues = [...rowValues]
      let equalValues = [...row]
      if(equalValues.length === 4 && equalValues.every(item => item.value === equalValues[0].value)){
        equalValues[3].value = equalValues[0].value*2
        equalValues[2].value = equalValues[1].value*2
        equalValues[1].value = 0
        equalValues[0].value = 0
        return {points: equalValues[0].value*4, row: equalValues}
      }  else { 
        // [64,32,32,0]
          let newPoints = 0;
          for (let i = newValues.length-1; i>=0; i--){
            let newI = i - 1
            if(newI < newValues.length && newI >= 0){
              if(newValues[i] === newValues[newI]){
                newValues[i] = newValues[i] *2;
                newPoints += newValues[i]
                newValues[newI] = 0;
              } else if (newValues[i] === 0 && newValues[newI] > 0) {
                newValues[i] = newValues[newI]
                newValues[newI] = 0
              } 
            }
          }

        let newValues2 = []
        let newLength = newValues.length - 4
        if (newLength !== 0) {
          let addedRows = []
          for(let i=0; i<newLength*-1; i++){
            addedRows.push(0)
          }
          newValues2 = [...addedRows, ...newValues]
        } else {
          newValues2 = [...newValues]
        }

          let newRow = [...row]
          for(let i =0; i<newRow.length; i++){
            for(let j =0; j<newValues2.length; j++){
              let newPiece = {...row[i]}
              if(i === j){
                  newPiece.value = newValues2[j]
                  newRow.splice(i, 1, newPiece)
              } 
            }
          }
          return {points: newPoints, row: newRow}
        }
      }
  } else {
    return {points: 0, row: row}
  }
}

const changeUpCol = (col) => {
   let colValues = col.filter(piece => piece.value !== 0).map(piece => piece.value)
        if(Array.isArray(colValues) && colValues.length > 0){
            if(colValues.length === 1){
              let value = colValues[0];
              let newRow = col.map((piece, index) => {
                  let newPiece = {...piece}
                if(index === 0){
                  newPiece.value = value;
                } else {
                  newPiece.value = 0;
                }
                return newPiece
              })
              return {points: 0, col: newRow}
            } else {
              // find matching numbers and then add if adjacent once
              let newValues = [...colValues]
              let equalValues = [...col]
              if(equalValues.length === 4 && equalValues.every(item => item.value === equalValues[0].value)){
                equalValues[0].value = equalValues[0].value*2
                equalValues[1].value = equalValues[1].value*2
                equalValues[2].value = 0
                equalValues[3].value = 0
                return {points: equalValues[0].value*4, col: equalValues}
              }  else { 
                let newPoints = 0;
                for (let i = 0; i<newValues.length; i++){
                  let newI = i + 1
                  if(newI < newValues.length){
                    if(newValues[i] === newValues[newI]){
                      newValues[i] = newValues[i] *2;
                      newPoints += newValues[i]
                      newValues[newI] = 0;
                    } else if (newValues[i] === 0 && newValues[newI] > 0) {
                      newValues[i] = newValues[newI]
                      newValues[newI] = 0
                    } 
                  }
                }

                let newValues2 = []
                let newLength = newValues.length - 4
                if (newLength !== 0) {
                  let addedRows = []
                  for(let i=0; i<newLength*-1; i++){
                    addedRows.push(0)
                  }
                  newValues2 = [ ...newValues, ...addedRows]
                } else {
                  newValues2 = [...newValues]
                }

                let newRow = [...col]
                for(let i =0; i<newRow.length; i++){
                  for(let j =0; j<newValues2.length; j++){
                    let newPiece = {...col[i]}
                    if(i === j){
                        newPiece.value = newValues2[j]
                        newRow.splice(i, 1, newPiece)
                    } 
                  }
                }
                return {points: newPoints, col: newRow}
                }
              }
          } else {
            return {points: 0, col: col}
          }
    } 

const changeDownCol = (col) => {
  let colValues = col.filter(piece => piece.value !== 0).map(piece => piece.value)
  if(Array.isArray(colValues) && colValues.length > 0){
    if(colValues.length === 1){
      let value = colValues[0];
      let newRow = col.map((piece, index) => {
          let newPiece = {...piece}
        if(index === 3){
          newPiece.value = value;
        } else {
          newPiece.value = 0;
        }
        return newPiece
      })
      return {points: 0, col: newRow}
    } else {
      // find matching numbers and then add if adjacent once
      let newValues = [...colValues]
      let equalValues = [...col]
      if(equalValues.length === 4 && equalValues.every(item => item.value === equalValues[0].value)){
        equalValues[3].value = equalValues[0].value*2
        equalValues[2].value = equalValues[1].value*2
        equalValues[1].value = 0
        equalValues[0].value = 0
        return {points: equalValues[0].value*4, col: equalValues}
      }  else { 
        let newPoints = 0;
        for (let i = newValues.length-1; i>=0; i--){
          let newI = i - 1
          if(newI < newValues.length && newI >= 0){
            if(newValues[i] === newValues[newI]){
              newValues[i] = newValues[i] *2;
              newPoints += newValues[i]
              newValues[newI] = 0;
            } else if (newValues[i] === 0 && newValues[newI] > 0) {
              newValues[i] = newValues[newI]
              newValues[newI] = 0
            } 
          }
        }
        let newValues2 = []
        let newLength = newValues.length - 4
        if (newLength !== 0) {
          let addedRows = []
          for(let i=0; i<newLength*-1; i++){
            addedRows.push(0)
          }
          newValues2 = [...addedRows, ...newValues]
        } else {
          newValues2 = [...newValues]
        }

          let newRow = [...col]
          for(let i =0; i<newRow.length; i++){
            for(let j =0; j<newValues2.length; j++){
              let newPiece = {...col[i]}
              if(i === j){
                  newPiece.value = newValues2[j]
                  newRow.splice(i, 1, newPiece)
              } 
            }
          }
          return {points: newPoints, col: newRow}
        }      
    }
  } else {
    return {points: 0, col: col}
  }
}


export const left = (actualBoard) => {
    let newBoard = []
    let points1 = 0;
    for (let i = 0; i<4; i++){
      let row1 = actualBoard.filter(piece => piece.row === i)
      let {points, row} = changeLeftRow(row1)
      points1 += points
      newBoard.push(...row)
    }
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