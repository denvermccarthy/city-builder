// import functions 
import { createStatsString } from "./utils.js";
// console.log(createStatsString(5, 3, 1));
// grab DOM elements
const architectureSel = document.getElementById('architecture-dropdown');
const climateSel = document.getElementById('climate-dropdown');
const knownforSel = document.getElementById('knownfor-dropdown');
const archImg = document.getElementById('architecture-img');
const climateImg = document.getElementById('climate-img');
const knownforImg = document.getElementById('knownfor-img');
const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');
const sloganIdeas = document.getElementById('slogan-ideas');
const report = document.getElementById('report-stats');
const resetButton = document.getElementById('reset');


// let state
let archCount = 0;
let climateCount = 0;
let knownCount = 0;
let slogans = [];
// set event listeners
function displayStats() {
    const stats = createStatsString(archCount, climateCount, knownCount);
    report.textContent = stats;
}
function displaySlogans() {
  sloganIdeas.textContent = '';  
  for (let slogan of slogans) {
        const p = document.createElement('p');
        p.textContent = slogan;
        sloganIdeas.append(p);
    }
}

architectureSel.addEventListener('change', (e) => {
    report.textContent = '';
    const value = e.target.value;
    archCount++;
    archImg.src = `./assets/${value}-architecture.jpeg`;
    displayStats();   
});

climateSel.addEventListener('change', (e) => {
    report.textContent = '';
    const value = e.target.value;
    climateCount++;
    climateImg.src = `./assets/${value}-climate.jpeg`;
    displayStats();   
});

knownforSel.addEventListener('change', (e) => {
    report.textContent = '';
    const value = e.target.value;
    knownCount++;
    knownforImg.src = `./assets/${value}-knownfor.jpeg`;
    displayStats();   
});
  // get user input
sloganButton.addEventListener('click', (e) => {
    const userSlogan = sloganInput.value;
    // console.log('test', userSlogan);
    slogans.push(userSlogan);
    // console.log('test', slogans);
    sloganInput.value = '';
    
    displaySlogans();
});

sloganInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const userSlogan = sloganInput.value;
      // console.log('test', userSlogan);
        slogans.push(userSlogan);
      // console.log('test', slogans);
        sloganInput.value = '';
      
        displaySlogans(); 
    }
});

resetButton.addEventListener('click', () => {
    sloganIdeas.textContent = '';
});
  // use user input to update state 
  // update DOM to reflect the new state
