class RaffleResult {
    constructor(msisdn, prize) {
      this.msisdn = msisdn;
      this.prize = prize;
    }
  }
  function generateReport(raffleResults, includePrizes = false) {
    return raffleResults.map(result => {
      return includePrizes 
        ? { MSISDN: result.msisdn, Prize: result.prize }
        : { MSISDN: result.msisdn };
    });
  }
  