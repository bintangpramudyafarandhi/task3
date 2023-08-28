console.log("============ MANIPULASI STRING ==============");
function uppercase(input) { // function uppercase
    let result = input.toUpperCase()
    return result
}

function lowercase(input) { // function lowercase
    let result = input.toLowerCase()
    return result
}

function length(input) { // function length
    let result = input.length
    return result
}

function firstLetter(input) { // huruf pertama
    let result = input[0]
    return result
}

function cut(input, num1, num2) { // potongan nama
    let result = input.slice(num1,num2)
    return result
}

function loveJs(input) { // + "Love Javascript"
    let result = input + " Love Javascript"
    return result
}

function lastLetter(input) { // huruf terakhir
    let result = input[input.length-1]
    return result
}

console.log(uppercase("bintang"));
console.log(lowercase("BINTANG"));
console.log(length("bintang"));
console.log(firstLetter("bintang"));
console.log(cut("bintang pramudya", 8, 16));
console.log(loveJs("bintang"));
console.log(lastLetter("bintang"));

console.log("============ MENGUBAH TIPE DATA ==============");

function toNumber(input) { // ubah jadi number
    let result = parseInt(input)
    return result
}

function toFloat(input) { // ubah jadi float
    let result = parseFloat(input)
    return result
}

console.log(toNumber("23"));
console.log(toFloat("57"));

console.log("============ PENGECEKAN TIPE DATA ==============");

function checkData(input) { // cek tipe data
    let result = typeof input
    return result
}

console.log(checkData(true));

console.log("============ PENJUMLAHAN DAN PENGURANGAN ==============");

function add(num1, num2) { // penjumlahan
    let result = num1 + num2
    return result
}

function substract(num1, num2) { // pengurangan
    let result = num1 - num2
    return result
}

console.log(add(28,15));
console.log(substract(972, 283));

console.log("============ PERKALIAN DAN PEMBAGIAN ==============");

function multiply(num1, num2) { // perkalian
    let result = num1 * num2
    return result
}

function divide(num1, num2) { // pembagian
    let result = num1 / num2
    return result
}

console.log(multiply(2,7));
console.log(divide(72,6));

console.log("============ PANGKAT BILANGAN ==============");

function power(num1, num2) { // pangkat bilangan
    let result = num1 ** num2
    return result
}

console.log(power(4,8));

console.log("============ RATA RATA DARI ARRAY ==============");

function average(array) { // rata rata
    let result = array.reduce((a,b) => a + b) / array.length
    return result
}

console.log(average([4,6,16,8,2]));

console.log("============ BILANGAN GANJIL ATAU GENAP ==============");

function oddEven(num) { // ganjil genap
    if (num % 2 == 0) {
        console.log("ini genap");
    } else {
        console.log("ini ganjil");
    }
}

oddEven(9)

console.log("============ RANDOM ==============");

function randomNum(start, end) { // angka random
    let result = Math.round(Math.random() * end-1) + start
    return result
}

console.log(randomNum(1,100));

console.log("============ CELCIUS KE FAHRENHEIT ==============");

function toFahrenheit(celc) { // celcius ke fahrenheit
    let result = (celc * 9/5) + 32
    return result
}

console.log(toFahrenheit(90));

console.log("============ CEK HURUF VOKAL ==============");

function isVowel(params) { // cek huruf vokal
    if (params == "a" || params == "i" || params == "u" || params == "e" || params == "o") {
        console.log("ini huruf vokal");
    } else {
        console.log("ini bukan huruf vokal");
    }
}

isVowel("o")