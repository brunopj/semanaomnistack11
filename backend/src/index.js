const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
//app.use(cors({//libera acesso a partir dessa origin.
 // origin: 'http://meuapp.com'//
//}));//
app.use(express.json()); // faz funcionar os datos vindo do arquivo .json
app.use(routes);

/**
 *  Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação do back-end
  */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, Paginação)
 * ex: http://localhost:3333/users?nome=Bruno
 *  
 * Route Params: Parametros utilizados para identificar recursos
 * ex:app.get('/users/:id'
 * http://localhost:3333/users/1
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * ex: post http://localhost:3333/users
 *     json
 *    {
 *      "name":"Bruno Pedro", 
 *      "idade":29
 *      
 *    }
 */

/**
 * 
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * 
 * NoSQL:MongoDB, CounchDB, etc
 * 
 */

 /**
  * Driver: SELECT * FROM users
  * 
  * Query Builder: table('users').select('*').where()
  */




app.listen(3333);

