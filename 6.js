let cm = parseInt(prompt("Masukkan cm:"));

let km = Math.floor(cm / 100000);
let sisa1 = cm - (km * 100000);

let m = Math.floor(sisa1 / 100);
let sisa2 = sisa1 - (m * 100);

console.log("Kilometer =", km);
console.log("Meter =", m);
console.log("Sentimeter =", sisa2);