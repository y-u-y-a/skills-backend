const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// const db = require('./db');

const app = express();
app.set('views', './views');
app.listen(4000);
app.get('/', (req, res) => res.render('index.ejs'));

// GraphQL
// let schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);
// let root = { hello: () => 'Hello world!' };
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));

// MySQL
// db.conn.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL Connected');
// });
