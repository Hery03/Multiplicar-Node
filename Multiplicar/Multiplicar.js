// Requireds
const fs = require('fs');
var colors = require('colors');

let ListarTabla = (base, limite = 10) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*limite} `.rainbow);
    }
}

let CrearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base: ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\r\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tablas/tabla-${base}.txt`)
        });
    });
}

module.exports = {
    CrearArchivo,
    ListarTabla
}