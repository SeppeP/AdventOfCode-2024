import { rules, updates } from './input.js';

// const rules =
//   '47|53\n' +
//   '97|13\n' +
//   '97|61\n' +
//   '97|47\n' +
//   '75|29\n' +
//   '61|13\n' +
//   '75|53\n' +
//   '29|13\n' +
//   '97|29\n' +
//   '53|29\n' +
//   '61|53\n' +
//   '97|53\n' +
//   '61|29\n' +
//   '47|13\n' +
//   '75|47\n' +
//   '97|75\n' +
//   '47|61\n' +
//   '75|61\n' +
//   '47|29\n' +
//   '75|13\n' +
//   '53|13'
//
// const updates =
//   '75,47,61,53,29\n' +
//   '97,61,53,29,13\n' +
//   '75,29,13\n' +
//   '75,97,47,61,53\n' +
//   '61,13,29\n' +
//   '97,13,75,29,47'


const rulesArr = rules.split('\n');
const sanitizedRules = rulesArr.map(r => r.split('|').map(Number));

const updatesArr = updates.split('\n');

function getMiddleSum(updates) {
  return updates.reduce((a, b) => {
    return a + b[Math.floor(b.length / 2)];
  }, 0);
}

function validateUpdate(update) {
  const updateNumbers = update.split(',').map(Number);

  return updateNumbers.every((num, index) => {
    if (index === updateNumbers.length - 1) return true;
    return !!sanitizedRules.find(rule => {
      return num === rule[0] && updateNumbers[index + 1] === rule[1];
    });
  });
}

function part1() {
  const validUpdates = updatesArr.filter(u => validateUpdate(u)).map(i => i.split(',').map(Number));

  return getMiddleSum(validUpdates);
}

function findPotentialRuleByIndex(value, index) {
  return sanitizedRules.filter(r => r[index] === value);
}

function part2() {
  const invalidUpdates = updatesArr.filter((u) => validateUpdate(u) === false).map(i => i.split(',').map(Number));

  const correctedUpdates = invalidUpdates.map(update => {
    return update.sort((a, b) => {

    })
  })

  return getMiddleSum(invalidUpdates);
}

console.log('part 1: ', part1());
// console.log('big oof');
// console.log('part 2: ', part2());
