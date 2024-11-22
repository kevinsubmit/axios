import express from "express";

import "./db/connection.js"

const app = express();

app.listen(3000, ()=> {
  console.log("App is running on port 3000")
})