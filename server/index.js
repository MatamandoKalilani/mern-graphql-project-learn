const colors = require("colors");
const { graphqlHTTP } = require("express-graphql");
const express = require("express");
const schema = require("./schema/schema");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");

const port = process.env.PORT || 5000;

// Connect to DB
connectDB();

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server Listening on: ${port}`));
