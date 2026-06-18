let tahun = parseInt(prompt("Masukkan tahun: "));

if ((tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0) {
    console.log(tahun + " adalah Tahun Kabisat");
} else {
    console.log(tahun + " bukan Tahun Kabisat");
}