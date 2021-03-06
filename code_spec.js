describe('Coin changer', function() {
  var bank;
  beforeEach(function() {
    bank = {
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 0
    };
  });

  it('gives no change (no coins) for amount of 0 cents', function() {
    var changer = new CoinChanger(bank);

    expect(changer.makeChange(0)).toEqual({
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 0
    });
  });

  it('gives a single penny change for amount of 1 cents', function() {
    bank.pennies = 20;
    var changer = new CoinChanger(bank);

    expect(changer.makeChange(1)).toEqual({
      quarters: 0,
      dimes: 0,
      nickles: 0,
      pennies: 1
    });
  });

  it('gives a penny and a nickle for amount of 6 cents', function() {
    bank.pennies = 20;
    bank.nickles = 5;
    var changer = new CoinChanger(bank);

    expect(changer.makeChange(6)).toEqual({
      quarters: 0,
      dimes: 0,
      nickles: 1,
      pennies: 1
    });
  });
});
