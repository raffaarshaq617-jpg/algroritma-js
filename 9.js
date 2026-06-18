let x = parseInt(prompt("Masukkan nilai x:"));
let y = parseInt(prompt("Masukkan nilai y:"));

if (x > 0 && y > 0) {
    console.log("Kuadran I");
} else if (x < 0 && y > 0) {
    console.log("Kuadran II");
} else if (x < 0 && y < 0) {
    console.log("Kuadran III");
} else if (x > 0 && y < 0) {
    console.log("Kuadran IV");
} else {
    console.log("Awh dmana wae");
}