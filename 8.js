let tinggi = parseInt(prompt("Masukkan tinggi badan (cm):"));

if (tinggi <= 100) {
    console.log("Tinggi badan tidak valid");
} else {
    let bbIdeal = (tinggi - 100) - ((tinggi - 100) * 10 / 100);
    console.log("Berat badan ideal =", bbIdeal, "kg");
}