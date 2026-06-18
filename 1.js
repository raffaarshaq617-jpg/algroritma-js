let detik = Number(prompt("Masukkan jumlah detik: "));
let menit = detik / 60;
let jam = menit / 60;
let hari = jam / 24;

if (jam >=  24) {
    console.log("TOtal adalah:" + Math.floor(hari) + "hari")
} else if (menit >= 60) {
    console.log("Total adalah:" + Math.floor(jam) + "jam")
} else if (detik >=  60){
    console.log ("Total adalah:" + Math.floor(menit) + "menit")
} else if (detik <= 60) {
    console.log("Total adalah:" + Math.floor(detik) + "detik")
} else {
    console.log("Input tidak valid")
}