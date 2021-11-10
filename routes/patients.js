const express = require("express");
const router = express.Router();
const Patient = require("../models/patients");

router.get("/", async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.send("Error: " + err);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.json(patient);
    } catch (err) {
        res.send("Error: " + err);
    }
});

router.post("/", async (req, res) => {
    const patient = new Patient({
        name: req.body.name,
        age: req.body.tech,
        created: req.body.created,
        lastVisited: req.body.lastVisited,
    });

    try {
        const a1 = await patient.save();
        res.json(a1);
    } catch (err) {
        res.send("Error: " + err);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        patient.sub = req.body.sub;
        const a1 = await patient.save();
        res.json(a1);
    } catch (err) {
        res.send("Error: " + err);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        const a1 = await patient.remove();
        res.json(a1);
    } catch (err) {
        res.send("Error: " + err);
    }
});

module.exports = router;
