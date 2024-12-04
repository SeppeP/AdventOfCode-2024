import input from './input.js';


function getResult(part) {
  const regex = part === 1 ? /mul\(\d\d?\d?,\d\d?\d?\)/g : /(mul\(\d\d?\d?,\d\d?\d?\))|(do\(\))|(don\'t\(\))/g;
  const found = input.match(regex);

  function filterFoundMultipliers(arr) {
    let isDo = true;
    return arr.filter(found => {
      if (found.startsWith('mul(') && isDo) {
        return true;
      } else {
        isDo = found === 'do()';
      }
      return false;
    });
  }

  const filtered = filterFoundMultipliers(found);

  const numbers = (part === 1 ? found : filtered).map(str => str.replace('mul(', '').replace(')', ''));

  const multiplied = numbers.map(num => {
    const [a, b] = num.split(',');
    return a * b;
  });

  return multiplied.reduce((a, b) => a + b, 0);
}

console.log('part 1', getResult(1));
console.log('part 2', getResult(2));