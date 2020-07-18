const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Loan = require("../models/loan");

router.post("/loan", (req, res) => {
  const {
    name,
    fathername,
    email,
    phone,
    whatsapp,
    Paddress,
    Cadress,
    amount,
    period,
  } = req.body.request;
  const newLoan = new Loan({
    name,
    fathername,
    email,
    phone,
    whatsapp,
    Paddress,
    Cadress,
    amount,
    period,
  });
  newLoan.save();
});
module.exports = router;
