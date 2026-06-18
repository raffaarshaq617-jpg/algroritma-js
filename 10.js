let jamKerja = parseInt(prompt("Masukkan jumlah jam kerja: "));
let gaji;

if (jamKerja <= 48) {
    gaji = jamKerja * 2000;
} else {
    let lembur = jamKerja - 48;
    gaji = (48 * 2000) + (lembur * 3000);
}

console.log("Upah mingguan yg diterima = Rp" + gaji);