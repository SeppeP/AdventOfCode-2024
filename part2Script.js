import rows from './input.js';

let counter = 0;

for (let y = 0; y < rows.length; y++) {
  for (let x = 0; x < rows[0].length; x++) {
    if (rows[x][y] === 'A') {
      const str1 = `${rows[x - 1] ? rows[x - 1][y - 1] ?? '' : ''}${rows[x][y]}${rows[x + 1] ? rows[x + 1][y + 1] ?? '' : ''}`
      const str2 = `${rows[x - 1] ? rows[x - 1][y + 1] ?? '' : ''}${rows[x][y]}${rows[x + 1] ? rows[x + 1][y - 1] ?? '' : ''}`
      console.log((str1 === 'MAS' || str1 === 'SAM') && (str2 === 'MAS' || str2 === 'SAM'));
      if((str1 === 'MAS' || str1 === 'SAM') && (str2 === 'MAS' || str2 === 'SAM')) counter++
    }
  }
}

console.log(counter);