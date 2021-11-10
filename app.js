const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;
const URL = "mongodb://localhost/patientDB";

mongoose.connect(URL, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", () => {
    console.log("Connected....");
});
app.use(express.json());
const patientRouter = require("./routes/patients");
app.use("/patients", patientRouter);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
