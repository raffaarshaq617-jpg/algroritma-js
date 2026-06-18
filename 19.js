const prompt = require('prompt-sync')();

let bulan = Number(prompt("Masukkan nomor bulan (1-12): "));
let tahun = Number(prompt("Masukkan tahun: "));

if (bulan === 1 || bulan === 3 || bulan === 5 || bulan === 7 || bulan === 8 || bulan === 10 || bulan === 12) {
    console.log("Jumlah hari: 31");
} else if (bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) {
    console.log("Jumlah hari: 30");
} else if (bulan === 2) {
    if (tahun % 400 === 0 || (tahun % 4 === 0 && tahun % 100 !== 0)) {
        console.log("Jumlah hari: 29 (tahun kabisat)");
    } else {
        console.log("Jumlah hari: 28 (bukan tahun kabisat)");
    }
} else {
    console.log("Lain nomor bulan");
}