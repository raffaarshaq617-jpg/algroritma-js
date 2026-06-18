let t1 = 10, b1 = 5, th1 = 2024;
let t2 = 20, b2 = 8, th2 = 2025;

let total1 = th1 * 365 + b1 * 30 + t1;
let total2 = th2 * 365 + b2 * 30 + t2;

let selisih = Math.abs(total2 - total1);

let tahun = Math.floor(selisih / 365);
selisih %= 365;

let bulan = Math.floor(selisih / 30);
selisih %= 30;

let hari = selisih;

console.log(tahun, "tahun");
console.log(bulan, "bulan");
console.log(hari, "hari");