let nama = prompt("Masukkan nama:");
let golongan = prompt("Masukkan golongan (A/B/C/D):");
let jamKerja = parseInt(prompt("Masukkan jam kerja:"));

let upahPerJam;

if (golongan == "A") {
    upahPerJam = 4000;
} else if (golongan == "B") {
    upahPerJam = 5000;
} else if (golongan == "C") {
    upahPerJam = 6000;
} else if (golongan == "D") {
    upahPerJam = 7500;
} else {
    console.log("Golongan nn eta 🗿");
}

let gaji 

if (jamKerja <= 48) {
    gaji = jamKerja * upahPerJam;
} else {
    let lembur = jamKerja - 48;
    gaji = (48 * upahPerJam) + (lembur * 3000);
}

console.log("Nama :", nama);
console.log("Golongan :", golongan);
console.log("Gaji Mingguan : Rp" + gaji);