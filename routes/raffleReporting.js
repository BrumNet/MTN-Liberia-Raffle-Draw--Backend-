const express = require("express");
const router = express.Router();
const cors = require("cors");
const { generateReportHandler } = require("../controllers/raffleReportController");

router.use(cors());
router.use(express.json());
router.get("/report", generateReportHandler);

module.exports = router;
