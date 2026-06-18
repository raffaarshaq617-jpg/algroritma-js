let jam = Number(prompt("Masukkan jumlah jam kerja: "));
let hari = jam / 24;
let bulan = hari / 30;
let tahun = bulan / 12;


if ( bulan >= 12) {
    console.log("Total tahunnya " + Math.floor(tahun) + "  tahun")
} else if (hari >= 30) {
    console.log("Total bulannya " + Math.floor(bulan) + "  bulan")
} else if (jam >= 24) {
    console.log("Total harinya " + Math.floor(hari) + "  hari")
} else if (jam <= 24) {
    console.log("Total jam kerjanya " + Math.floor(jam) + "  jam")
} else {
    console.log("KOSOOONG")
}