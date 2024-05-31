const express = require("express");
const router = express.Router();
const cors = require("cors");
const { configurePrize, getPrizeConfigs } = require("../controllers/prizeConfigController");

router.use(cors());
router.use(express.json());

router.post("/configure-prize", configurePrize);
router.get("/prize-configs", getPrizeConfigs);

module.exports = router;
