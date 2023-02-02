const expect = chai.expect;

describe("oneEditAway", function() {
  it(`should return false if given strings "Hello" and "Hello" that are ZERO edits apart`, function() {
    const str1 = "Hello";
    const str2 = "Hello";

    const result = oneEditAway(str1, str2);

    expect(result).to.eql(false);
  });

  it(`should true if given the strings "Hexlo" and "Hello" that are ONE edit apart`, function() {
    const str1= "Hello";
    const str2= "Hexlo";

    const result = oneEditAway(str1, str2);

    expect(result).to.eql(true);
  });

  it(`should return true if given the strings "wo" and "wow" that are ONE edit apart`, function() {
    const str1 = "wow";
    const str2 = "wo";

    const result = oneEditAway(str1, str2);

    expect(result).to.eql(true);
  });

  it(`should return false if given the strings "Hexxo" and "Hello" that are MORE THAN ONE edit apart`, function() {
    const str1 = "Hello";
    const str2 = "Hexxo";

    const result = oneEditAway(str1, str2);

    expect(result).to.eql(false);
  });

});
