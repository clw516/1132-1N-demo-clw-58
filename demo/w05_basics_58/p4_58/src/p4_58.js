import { students } from './data_58.js';
console.log('students', students);

let stat = {
  pass: 0,
  fail: 0,
  sum: 0,
  average: 0,
  highest: -100,
  lowest: 200,
};

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

const resetStat = () => {
  (stat.pass = 0),
    (stat.fail = 0),
    (stat.sum = 0),
    (stat.average = 0),
    (stat.highest = 0),
    (stat.lowest = 0);
};

const computeStat = (s) => {
  resetStat();
  s.forEach((item) => {
    if (item.score > 59.5) stat.pass++;
    else stat.fail++;
    stat.sum += item.score;
    stat.average = stat.sum / s.length;
  });
};

const computeHighest = (s) => {
  stat.highest = -100;
  s.forEach((item) => {
    if (item.score > stat.highest) stat.highest = item.score;
  });
  return stat.highest;
};

const computeLowest = (s) => {
  stat.lowest = 200;
  s.forEach((item) => {
    if (item.score < stat.lowest) stat.lowest = item.score;
  });
  return stat.lowest;
};

const outputStat = (s, isSort, result) => {
  const resultText = `
    <h3 class='my-4'> Array Statistics for ${
      result === 'result1' ? 'result1' : 'result2'
    }</h3>
    <p>After sorting descending </p>
    <p>${JSON.stringify(s)}</p>
    <p>Total:${s.length}</p>
    <p>Pass:${stat.pass}</p>
    <p>Fail:${stat.fail} </p>
    <p>Hightest:${isSort === true ? s[0].score : computeHighest(s)} </p>
    <p>Lowest:${isSort === true ? s[s.length - 1].score : computeLowest(s)}</p>
    <p>Average:${stat.average.toFixed(1)} </p>
  `;

  if (result === 'result1') {
    result1.innerHTML = resultText;
  } else if (result === 'result2') {
    result2.innerHTML = resultText;
  }
};

// sdata.push(85);

computeStat(students);
outputStat(students, false, 'result1');

const toSorted = students.toSorted(function (a, b) {
  return b.score - a.score;
});
console.log('students after sorting', students);
console.log('toSorted', toSorted);

computeStat(toSorted);
outputStat(toSorted, true, 'result2');

// const outputStat2 =(s) => {
//   result1.innerHTML = `
//     <h3 class='my-4'> Array Statistics </h3>
//     <p>students original: </p>
//     <p>${JSON.stringify(s)}</p>
//     <p>Total:${s.length}</p>
//     <p>Pass:${stat.pass}</p>
//     <p>Fail:${stat.fail} </p>
//     <p>Hightest:${s[0]} </p>
//     <p>Lowest:${s[s.length - 1]}</p>
//     <p>Average:${stat.average.toFixed(1)} </p>
//   `;
// }
