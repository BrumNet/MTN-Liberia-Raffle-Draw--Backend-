const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

class RaffleResult {
  constructor(msisdn, prize) {
    this.msisdn = msisdn;
    this.prize = prize;
  }
}
function createRaffleResult(msisdn, prize) {
  return new RaffleResult(msisdn, prize);
}

// Function to generate report
function generateReport(raffleResults, includePrizes = false) {
  return raffleResults.map(result => {
    return includePrizes 
      ? { MSISDN: result.msisdn, Prize: result.prize }
      : { MSISDN: result.msisdn };
  });
}

// API endpoint to fetch the report
app.get('/api/report', (req, res) => {
  const includePrizes = req.query.includePrizes === 'true';
  const report = generateReport(raffleResults, includePrizes);
  res.status(200).json({
    success: true,
    message: "Report generated successfully",
    data: report
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
