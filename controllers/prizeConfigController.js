const PrizeConfig = require("../models/prizeConfigModel");

const configurePrize = async (req, res) => {
  const { msisdn, prize } = req.body;

  try {
    let prizeConfig = await PrizeConfig.findOne({ msisdn });
    if (prizeConfig) {
      prizeConfig.prize = prize;
    } else {
      prizeConfig = new PrizeConfig({ msisdn, prize });
    }
    await prizeConfig.save();

    res.status(200).json({
      success: true,
      message: "Prize configured successfully",
      data: prizeConfig,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Function to get all prize configurations
const getPrizeConfigs = async (req, res) => {
  try {
    const prizeConfigs = await PrizeConfig.find({});
    res.status(200).json({
      success: true,
      message: "Prize configurations fetched successfully",
      data: prizeConfigs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { configurePrize, getPrizeConfigs };
