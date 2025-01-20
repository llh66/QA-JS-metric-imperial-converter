const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test("Testing valid whole number input", () => {
        assert.strictEqual(convertHandler.getNum("2lbs"), 2, "Correctly read a valid whole number input");
    });
    test("Testing valid decimal number input", () => {
        assert.strictEqual(convertHandler.getNum("3.5kg"), 3.5, "Correctly read a valid decimal number input");
    });
    test("Testing valid fractional number input", () => {
        assert.strictEqual(convertHandler.getNum("4/5km"), 0.8, "Correctly read a valid fractional number input");
    });
    test("Testing valid fractional input with a decimal", () => {
        assert.strictEqual(convertHandler.getNum("1.5/2gal"), 0.75, "Correctly read a valid fractional input with a decimal");
    });
    test("Testing invalid double-fraction input", () => {
        assert.strictEqual(convertHandler.getNum("3/4/5L"), "invalid number", "Correctly return an error on a double-fraction");
    });
    test("Testing valid no numeric input", () => {
        assert.strictEqual(convertHandler.getNum("mi"), 1, "Correctly default to a numerical input of 1 when no numerical input");
    });

    test("Testing valid input unit gal", () => {
        assert.strictEqual(convertHandler.getUnit("gal"), "gal", "Correctly read valid input unit gal")
    });
    test("Testing valid input unit L", () => {
        assert.strictEqual(convertHandler.getUnit("2l"), "L", "Correctly read valid input unit L")
    });
    test("Testing valid input unit mi", () => {
        assert.strictEqual(convertHandler.getUnit("1.5mI"), "mi", "Correctly read valid input unit mi")
    });
    test("Testing valid input unit km", () => {
        assert.strictEqual(convertHandler.getUnit("2/3Km"), "km", "Correctly read valid input unit km")
    });
    test("Testing valid input unit lbs", () => {
        assert.strictEqual(convertHandler.getUnit("1.2/3LBS"), "lbs", "Correctly read valid input unit lbs")
    });
    test("Testing valid input unit kg", () => {
        assert.strictEqual(convertHandler.getUnit("1.2/0.6kg"), "kg", "Correctly read valid input unit kg")
    });
    test("Testing invalid input unit", () => {
        assert.strictEqual(convertHandler.getUnit("abc"), "invalid unit", "Correctly return an error for an invalid input unit")
    });

    
    test("Testing return unit for input unit gal", () => {
        assert.strictEqual(convertHandler.getReturnUnit("gal"), "L", "Correctly return unit L for input unit gal")
    });
    test("Testing return unit for input unit L", () => {
        assert.strictEqual(convertHandler.getReturnUnit("L"), "gal", "Correctly return unit gal for input unit L")
    });
    test("Testing return unit for input unit mi", () => {
        assert.strictEqual(convertHandler.getReturnUnit("mi"), "km", "Correctly return unit km for input unit mi")
    });
    test("Testing return unit for input unit km", () => {
        assert.strictEqual(convertHandler.getReturnUnit("km"), "mi", "Correctly return unit mi for input unit km")
    });
    test("Testing return unit for input unit lbs", () => {
        assert.strictEqual(convertHandler.getReturnUnit("lbs"), "kg", "Correctly return unit kg for input unit lbs")
    });
    test("Testing return unit for input unit kg", () => {
        assert.strictEqual(convertHandler.getReturnUnit("kg"), "lbs", "Correctly return unit lbs for input unit kg")
    });
    
    test("Testing spelled-out string unit for input unit gal", () => {
        assert.strictEqual(convertHandler.spellOutUnit("gal"), "gallons", "Correctly spelled-out string unit for input unit gal")
    });
    test("Testing spelled-out string unit for input unit L", () => {
        assert.strictEqual(convertHandler.spellOutUnit("L"), "liters", "Correctly spelled-out string unit for input unit L")
    });
    test("Testing spelled-out string unit for input unit mi", () => {
        assert.strictEqual(convertHandler.spellOutUnit("mi"), "miles", "Correctly spelled-out string unit for input unit mi")
    });
    test("Testing spelled-out string unit for input unit km", () => {
        assert.strictEqual(convertHandler.spellOutUnit("km"), "kilometers", "Correctly spelled-out string unit for input unit km")
    });
    test("Testing spelled-out string unit for input unit lbs", () => {
        assert.strictEqual(convertHandler.spellOutUnit("lbs"), "pounds", "Correctly spelled-out string unit for input unit lbs")
    });
    test("Testing spelled-out string unit for input unit kg", () => {
        assert.strictEqual(convertHandler.spellOutUnit("kg"), "kilograms", "Correctly spelled-out string unit for input unit kg")
    });
    
    test("Testing converting for input unit gal", () => {
        assert.strictEqual(convertHandler.convert("1", "gal"), 3.78541, "Correctly convert gal to L")
    });
    test("Testing converting for input unit L", () => {
        assert.strictEqual(convertHandler.convert("2", "L"), 0.52834, "Correctly convert L to gal")
    });
    test("Testing converting for input unit mi", () => {
        assert.strictEqual(convertHandler.convert("2.5", "mi"), 2.5 * 1.60934, "Correctly convert mi to km")
    });
    test("Testing converting for input unit km", () => {
        assert.strictEqual(convertHandler.convert("0.8", "km"), 0.4971, "Correctly convert km to mi")
    });
    test("Testing converting for input unit lbs", () => {
        assert.strictEqual(convertHandler.convert("10", "lbs"), 4.53592, "Correctly convert lbs to kg")
    });
    test("Testing converting for input unit kg", () => {
        assert.strictEqual(convertHandler.convert("3.4", "kg"), 7.49572, "Correctly convert kg to lbs")
    });
});