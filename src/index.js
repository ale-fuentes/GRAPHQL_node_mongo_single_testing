// old version
// const express = require('express');

// With babel
import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";

import { connect  } from "./database";

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello project graphql'
    })
})


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        messageId: 'test'
    }
}));

app.listen(3000, () => {
    console.log('Server did start!');
});