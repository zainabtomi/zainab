const subhanallahCounterElement = document.getElementById('subhanallah-counter');
const alhamdulillahCounterElement = document.getElementById('alhamdulillah-counter');
const laIlahaIllallahCounterElement = document.getElementById('la-ilaha-illallah-counter');
const allahuAkbarCounterElement = document.getElementById('allahu-akbar-counter');

const subhanallahBtn = document.getElementById('subhanallah-btn');
const alhamdulillahBtn = document.getElementById('alhamdulillah-btn');
const laIlahaIllallahBtn = document.getElementById('la-ilaha-illallah-btn');
const allahuAkbarBtn = document.getElementById('allahu-akbar-btn');
const resetBtn = document.getElementById('reset-btn');


let subhanallahCount = 0;
let alhamdulillahCount = 0;
let laIlahaIllallahCount = 0;
let allahuAkbarCount = 0;

function incrementSubhanallah() {
    subhanallahCount++;
    subhanallahCounterElement.textContent = subhanallahCount;
}

function incrementAlhamdulillah() {
    alhamdulillahCount++;
    alhamdulillahCounterElement.textContent = alhamdulillahCount;
}

function incrementLaIlahaIllallah() {
    laIlahaIllallahCount++;
    laIlahaIllallahCounterElement.textContent = laIlahaIllallahCount;
}

function incrementAllahuAkbar() {
    allahuAkbarCount++;
    allahuAkbarCounterElement.textContent = allahuAkbarCount;
}

subhanallahBtn.addEventListener('click', incrementSubhanallah);
alhamdulillahBtn.addEventListener('click', incrementAlhamdulillah);
laIlahaIllallahBtn.addEventListener('click', incrementLaIlahaIllallah);
allahuAkbarBtn.addEventListener('click', incrementAllahuAkbar);

resetBtn.addEventListener('click', () => {
    subhanallahCount = 0;
    alhamdulillahCount = 0;
    laIlahaIllallahCount = 0;
    allahuAkbarCount = 0;
    subhanallahCounterElement.textContent = subhanallahCount;
    alhamdulillahCounterElement.textContent = alhamdulillahCount;
    laIlahaIllallahCounterElement.textContent = laIlahaIllallahCount;
    allahuAkbarCounterElement.textContent = allahuAkbarCount;
});
