import { reports } from './input.js';

function validateReport(report, correctIfUnsafe = true) {
  const isIncrease = report[report.length - 1] - report[0] > 0;
  let isSafe = true;

  for (let i = 1; i < report.length; i++) {
    const jump = report[i] - report[i - 1];
    if ((isIncrease && (jump < 0)) || (!isIncrease && (jump > 0)) || Math.abs(jump) > 3 || Math.abs(jump) < 1) {
      isSafe = false;
      break;
    }
  }

  if (!isSafe && correctIfUnsafe) {
    for (let i = 0; i < report.length; i++) {
      const reportWithoutI = report.filter((_, index) => {
        return index !== i;
      });
      if (validateReport(reportWithoutI, false)) {
        isSafe = true;
        break;
      }
    }
  }

  return isSafe;
}

console.log('part 1 answer', reports.filter(r => validateReport(r, false)).length);
console.log('part 2 answer', reports.filter(r => validateReport(r, true)).length);