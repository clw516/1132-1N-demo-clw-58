import { sdata } from './data_58.js';
console.log('sdata', sdata);

const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

const computePass = (s) => {
  let Pass = 0;
  s.forEach((score) => {
    if (score >= 59.5) pass++;
  });
  return pass;
};

const computeFail = (s) => {
  let Pass = 0;
  s.forEach((score) => {
    if (score >= 59.5) fail++;
  });
  return fail;
};

const computeHighest = (s) => {
  let highest = -100;
  s.forEach((score) => {
    if (score)
  })
}

const outputStat1 = (s) => {
  result1.innerHTML = `
  <h3 class='my-4'> Array Statistics </h3>
  <p>sdata original: </p>
    <p>${JSON.stringify(s)}</p>
    <p>Total: ${s.length}</p>
    <p>Pass: 4</p>
    <p>Fail: 2</p>
    <p>Highest: 100</p>
    <p>Lowest: 20</p>
    <p>Average: 65.2</p>
  `;
};

sdata.push(85);

outputStat1(sdata);
