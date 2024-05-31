const RaffleResult = require("../models/raffleResultModel");

// Function to generate report
function generateReport(raffleResults, includePrizes = false) {
  return raffleResults.map(result => {
    return includePrizes 
      ? { MSISDN: result.msisdn, Prize: result.prize }
      : { MSISDN: result.msisdn };
  });
}

// Route handler for generating the report
const generateReportHandler = async (req, res) => {
  const includePrizes = req.query.includePrizes === 'true';

  try {
    const raffleResults = await RaffleResult.find({});
    const report = generateReport(raffleResults, includePrizes);

    res.status(200).json({
      success: true,
      message: "Report generated successfully",
      data: report
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error generating report",
      error: error.message
    });
  }
};

module.exports = { generateReportHandler };
