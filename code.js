var CoinChanger = function(coinState) {
  return {
    makeChange: function(amountInCents) {
      return {
        quarters: 0,
        dimes: 0,
        nickles: 0,
        pennies: 0
      };
    }
  };
};
