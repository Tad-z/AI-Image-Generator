const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const openAiRoutes = require("./routes/openAi_routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/openai", openAiRoutes);

app.listen(port, () => console.log("Server started..."));
