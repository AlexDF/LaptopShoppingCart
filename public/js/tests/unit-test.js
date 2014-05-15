test("total price calculator", function() {
  equal(total("1000", "0", "0", "0"), 1000);
  equal(total("1000", "200", "0", "0"), 1200);
  equal(total("1000", "200", "0", "200"), 1400);
  equal(total("1000", "200", "200", "0"), 1400);
  equal(total("1000", "200", "200", "200"), 1600);
  equal(total("1000", "0", "200", "0"), 1200);
  equal(total("1000", "0", "200", "200"), 1400);
  equal(total("1000", "0", "0", "200"), 1200);
});
