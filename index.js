const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

/* No. 1 (bangun ruang)
// end-point "/bujur_sangkar" dengan method POST
app.post("/bujur_sangkar", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body

    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai sisi dari body

    let luas = 6 * (sisi * sisi)
    let volume = sisi * sisi * sisi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        luas: luas,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/kubus" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)

    let luas = 2*((panjang * lebar)+(panjang * tinggi)+(tinggi * lebar))
    let volume = panjang * lebar * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas: luas,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi)
    let jari_jari= Number(req.body.jari_jari)

    let luas = 3.14 * jari_jari * jari_jari * tinggi
    let volume = 3.14 * jari_jari * jari_jari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        jari_jari: jari_jari,
        luas: luas,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari_jari = Number(req.body.jari_jari) 
    let tinggi = Number(req.body.tinggi) 
 
    let luas_permukaan = 4 * 3.14 * (jari_jari * jari_jari * jari_jari)
    let volume = 4/3 * 3.14 * (jari_jari * jari_jari * jari_jari)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        jari_jari: jari_jari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})
*/

// app.get("/convert/celcius/:celcius", (req,res) => {
//     let celcius = Number(req.params.celcius)
//     let result;
 
//     let reamur = 4/5 * celcius
//     let fahrenheit = (9/5 * celcius) + 32
//     let kelvin = 273 + celcius
 
//     let response = {
//         celcius : celcius,
//         result : result = {
//             reamur : reamur,
//             fahrenheit : fahrenheit,
//             kelvin : kelvin
//         }
//     }
//     res.json(response);
// })
 
// app.get("/convert/reamur/:reamur", (req,res) => {
//     let reamur = Number(req.params.reamur)
//     let result;
 
//     let celcius = 5/4 * reamur
//     let fahrenheit = (9/4 * reamur) + 32
//     let kelvin = (5/4 * reamur) + 273
 
//     let response = {
//         reamur : reamur,
//         result : result = {
//             celcius : celcius,
//             fahrenheit : fahrenheit,
//             kelvin : kelvin
//         }
//     }
//     res.json(response);
// })
 
// app.get("/convert/kelvin/:kelvin", (req,res) => {
//     let kelvin = Number(req.params.kelvin)
//     let result;
 
//     let celcius = kelvin - 273
//     let reamur = 4/5 * (kelvin - 273.15)
//     let fahrenheit = 9/5 * (kelvin - 273.15) + 32
 
//     let response = {
//         kelvin : kelvin,
//         result : result = {
//             celcius : celcius,
//             fahrenheit : fahrenheit,
//             reamur : reamur
//         }
//     }
//     res.json(response);
// })
 
// app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
//     let fahrenheit = Number(req.params.fahrenheit)
//     let result;
 
//     let celcius = 5/9 * (fahrenheit - 32)
//     let reamur = 4/9 * (fahrenheit - 32)
//     let kelvin = 5/9 * (fahrenheit - 32) + 273
 
//     let response = {
//         fahrenheit : fahrenheit,
//         result : result = {
//             celcius : celcius,
//             reamur : reamur,
//             kelvin : kelvin
//         }
//     }
//     res.json(response);
// })


// end-point "/bmi" dengan method POST
app.post("/bmi", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat) 

    let bmi = berat / (tinggi * tinggi)
    let status = bmi
    if(bmi < 18.5){
        status = "kekurangan berat badan";
    }else if (bmi >= 18.5 && bmi <= 24.9){
        status = "normal";
    }else if (bmi >= 25 && bmi <= 29.9){
        status = "kelebihan berat badan";
    }else{
        status = "obesitas"
    }

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
