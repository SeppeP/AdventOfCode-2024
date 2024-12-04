import rows from './input.js';

function getColumns() {
  const result = [];
  for (let i = 0; i < rows.length; i++) {
    let str = '';
    for (let j = 0; j < rows[0].length; j++) {
      str += rows[j][i];
      if (j === rows[0].length - 1) result.push(str);
    }
  }
  return result;
}

function getDownwardDiagonals() {
  const result = [];
  let str = '';
  for (let i = 0; i < rows[0].length; i++) {
    for (let j = 0; j < i + 1; j++) {
      str += rows[rows.length - (i - j + 1)] ? rows[rows.length - (i - j + 1)][j] ?? '' : '';
    }
    if (str.length) result.push(str);
    str = '';
  }

  for (let i = 1; i < rows[0].length; i++) {
    for (let j = 0; j < rows[0].length - i; j++) {
      str += rows[j] ? rows[j][j + i] ?? '' : '';
    }
    if (str.length) result.push(str);
    str = '';
  }

  return result;
}

function getUpwardDiagonals() {
  const result = [];
  let str = '';
  for (let i = 0; i < rows[0].length; i++) {
    for (let j = 0; j < i + 1; j++) {
      str += rows[i - j] ? rows[i - j][j] ?? '' : '';
    }
    if (str.length) result.push(str);
    str = '';
  }

  for (let i = 1; i < rows[0].length; i++) {
    for (let j = 0; j < rows[0].length - i; j++) {
      str += rows[rows.length - j - 1] ? rows[rows.length - j - 1][i + j] ?? '' : '';
    }
    if (str.length) result.push(str);
    str = '';
  }

  return result;
}

const rowCounts = rows.map((row) => row.split('XMAS').length - 1);
const rowCountsReverse = rows.map((row) => row.split('SAMX').length - 1);

const columns = getColumns();
const columnCounts = columns.map((row) => row.split('XMAS').length - 1);
const columnCountsReverse = columns.map((row) => row.split('SAMX').length - 1);

const diagonalsDown = getDownwardDiagonals();
const diagonalsDownCounts = diagonalsDown.map((row) => row.split('XMAS').length - 1);
const diagonalsDownCountsReverse = diagonalsDown.map((row) => row.split('SAMX').length - 1);

const diagonalsUp = getUpwardDiagonals();
const diagonalsUpCounts = diagonalsUp.map((row) => row.split('XMAS').length - 1);
const diagonalsUpCountsReverse = diagonalsUp.map((row) => row.split('SAMX').length - 1);

const counts = [
  ...rowCounts,
  ...rowCountsReverse,
  ...columnCounts,
  ...columnCountsReverse,
  ...diagonalsDownCounts,
  ...diagonalsDownCountsReverse,
  ...diagonalsUpCounts,
  ...diagonalsUpCountsReverse,
];

console.log(counts.reduce((a, b) => a + b, 0));