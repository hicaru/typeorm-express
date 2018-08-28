import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";


const PORT = 3000;


createConnection().then(async connection => {
    console.log('\x1b[32m',
    `TypeORM: Connection with ${connection.options.type} on ${connection.options['host']}` +
    `, port: ${connection.options['port']}`, 
    '\x1b[0m');

}).catch(error => console.log(error));


 // create express app
 const app = express();
 app.use(bodyParser.json());
 app.listen(PORT);
 console.log('\x1b[32m', `express: listening on: ${PORT}`, '\x1b[0m');
