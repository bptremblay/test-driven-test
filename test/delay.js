describe("delay", function() {
    var calculator = new Calculator();
    it("returns a promise", function() {
        var willAdd = delay(100, calculator, 'add', [1, 1]);
        expect(willAdd).to.be.instanceOf(Promise);
        expect(willAdd).to.be.fulfilled;
    });
    it("delays execution", function() {
        expect(delay(1000, calculator, 'add', [10, 5])).to.eventually.equal(15);
        expect(delay(500, calculator, 'subtract', [9, 5])).to.eventually.equal(4);
    });
    it("cannot execute functions that do not exist", function() {
        expect(delay(1000, calculator, 'sqrt', [2, 2])).to.be.rejected;
    });
});