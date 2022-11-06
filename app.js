const express =require('express');
const {graphqlHTTP} =require('express-graphql');
const {buildSchema} =require('graphql');
const fs = require('fs');

const gqlSchema  = fs.readFileSync('./schema.graphql', {encoding: 'ascii'});
const schema = buildSchema(gqlSchema);
const resolver = require('./resolver')
const port = 5000
const app = express();
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: resolver,
    graphiql: true
    // formatError:
}))


app.listen(port);
console.log("leasining port", port);