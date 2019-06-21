var isValidSudoku = function(board) {
  let set = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let blockIndex = Math.trunc(i / 3) * 3 + Math.trunc(j / 3);
      if (board[i][j] !== '.') {
        const colCode = `c${j}${board[i][j]}`;
        const rowCode = `r${i}${board[i][j]}`;
        const blkCode = `b${blockIndex}${board[i][j]}`
        if (set.has(colCode) || set.has(rowCode) || set.has(blkCode)) {
          console.log(`${colCode}, ${rowCode}, ${blkCode}`);
          return false;
        }
        set.add(colCode);
        set.add(rowCode);
        set.add(blkCode);
      }
    }
  }
};

isValidSudoku(cols);


module.exports = isValidSudoku;
