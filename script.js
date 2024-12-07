import input from './input.js'

const rows = input.split('\n').map(r => {
  const numbers = r.split(':')[1].split(' ').filter(Boolean).map(Number);
  return {
    testValue: Number(r.split(':')[0]),
    numbers,
    operators: r.split(':')[1].split(' ').filter(Boolean).map(() => '+').slice(0, numbers.length - 1),
  };
});

function generatePermutations(arr) {
  const n = arr.length;
  const results = [];

  function helper(index, current) {
    if (index === n) {
      results.push(current.slice());
      return;
    }

    current[index] = '+';
    helper(index + 1, current);

    current[index] = '*';
    helper(index + 1, current);

    current[index] = '||';
    helper(index + 1, current);
  }

  helper(0, Array(n).fill(null));
  return results;
}


const x = rows.filter(row => {
  const permutations = generatePermutations(row.operators);
  return permutations.some((perm) => {

    return row.testValue === row.numbers.reduce((a, b, index) => {
      if (index === 0) return b;
      if (perm[index - 1] === '+') {
        return a + b;
      } else if(perm[index - 1] === '*') {
        return a * b;
      } else {
        return Number(`${a}${b}`)
      }
    }, 0);
  });
});


console.log(x.reduce((a, b) => {
  return b.testValue + a;
}, 0));
