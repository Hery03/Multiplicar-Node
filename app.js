// required
const { CrearArchivo, ListarTabla } = require('./Multiplicar/Multiplicar');
const argv = require('./config/yarg').argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        CrearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`))
            .catch((err) => console.log(err))
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(process.argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]