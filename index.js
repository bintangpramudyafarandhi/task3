console.log("================================== STRING ========================================");

console.log("============ MANIPULASI STRING ==============");

const name = "Bintang Pramudya Farandhi" // Variabel name
const upperCase = name.toUpperCase() // Ubah jadi huruf besar
const lowerCase = name.toLowerCase() // Ubah jadi huruf kecil

console.log(name.length); // Hitung panjang
console.log(upperCase); 
console.log(lowerCase);
console.log(name[0]); // Huruf pertama
console.log(name.slice(0,7)); // Potongan nama
console.log(name.slice(0,7) + " " + "Love Javascript"); // Nama + "Love Javascript"
console.log(name[name.length-1]); // Huruf terakhir

console.log("============ MENGUBAH TIPE DATA ==============");

const age = "17" // Variabel umur
const height = "176" // Variabel tinggi badan

console.log(parseInt(age)); // Ubah jadi number
console.log(parseFloat(height)); // Ubah jadi float

console.log("============ PENGECEKAN TIPE DATA ==============");

const data = true 

console.log(typeof(data)); // Cek tipe data

console.log("================================== NUMBER ========================================");

console.log("============ PENJUMLAHAN DAN PENGURANGAN ==============");

const num1 = 10
const num2 = 5

console.log(num1 + num2); // Penjumlahan
console.log(num1 - num2); // Pengurangan

console.log("============ PERKALIAN DAN PEMBAGIAN ==============");

const num3 = 6
const num4 = 2

console.log(num3 * num4);
console.log(num3 / num4);

console.log("============ PANGKAT BILANGAN ==============");

const base = 3
const exponent = 4

console.log(base**exponent); // Pangkat bilangan

console.log("============ RATA RATA DARI ARRAY ==============");

const array = [4,6,16,8,2]
const average = array.reduce((a,b) => a + b) / array.length

console.log(average); // Rata rata

console.log("============ BILANGAN GANJIL ATAU GENAP ==============");

const num = 7

if (num %2 == 0) { // Logika ganjil atau genap
    console.log("Angka ini genap");
} else {
    console.log("Angka ini ganjil");
}

console.log("================================== RANDOM ========================================");

console.log(Math.round(Math.random() * 4) + 1); // Angka random 1 - 5