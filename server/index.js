const express = require('express');
const userData = require('./MOCK_DATA.json')
const graphql = require('graphql');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./Schemas')
const cors = require('cors');


const app = express();

 app.use(cors())
const PORT = 3000;



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`Graphql server is running on http://localhost:${PORT}`)
})
