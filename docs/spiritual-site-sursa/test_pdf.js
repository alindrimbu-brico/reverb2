const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:\\Users\\alind\\Documents\\Brianna_Wiest_-_101_eseuri_care_iti_vor_schimba_modul_de_a_gandi.pdf');

pdf(dataBuffer).then(function(data) {
    // text of the first 5000 characters
    console.log(data.text.substring(0, 5000));
}).catch(console.error);
