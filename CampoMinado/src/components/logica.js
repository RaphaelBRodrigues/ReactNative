const criarTabuleiro = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => {
          return {
            row: row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};

const espalharMinas = (tabuleiro, quantidadeDeMinas) => {
  const rows = board.length;
  const columns = board[0].length;
  let minasPlantadas = 0;

  while (minasPlantadas < quantidadeDeMinas) {
    const rowSel = parseInt(Math.random() * rows, 10);
    const columnSel = parseInt(Math.random() * columns, 10);

    if (!tabuleiro[rowSel][columnSel].mined) {
      tabuleiro[rowSel][columnSel].mined = true;
      minasPlantadas++;
    }
  }
};

const criarTabuleiroMinas = (rows, columns, minesAmount) => {
  const board = criarTabuleiro(rows, columns);
  espalharMinas(board, minesAmount);
  return board;
};

export {criarTabuleiroMinas};
