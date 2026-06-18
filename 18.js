const prompt = require('prompt-sync')();

let jam = prompt("Masukkan jam (hh:mm:ss): ").split(':').map(Number);

let hh = jam[0];
let mm = jam[1];
let ss = jam[2];

ss++ 

if (ss === 60) {
    ss = 0;
    mm++;
}

if (mm === 60) {
    mm = 0;
    hh++;
}

if (hh === 24) {
    hh = 0;
}

let hasil = 
    String(hh).padStart(2, '0') + ':' +
    String(mm).padStart(2, '0') + ':' +
    String(ss).padStart(2, '0');

console.log("Jam baru: " + hasil);