function ConvertHandler() {
  
  this.getNum = function(input) {
    //remove all alphabetic characters at the end
    const numberStr = String(input).replace(/[a-z]*$/i, "");

    //check if there were only letters in input
    if (numberStr.length === 0) {
      return 1;
    }

    //check if the remaining String contains characters other than numbers, decimals, and slashes
    if (! /^[0-9./]*$/.test(numberStr)) {
      return "invalid number";
    }

    const slashCount = (numberStr.match(/\//) || []).length;

    if (slashCount === 0) {
      return isNaN(numberStr) ? "invalid number" : Number(numberStr);
    }

    if (slashCount === 1) {
      const numberStrs = numberStr.split("/");
      if (numberStrs.length === 2) {
        const dividend = numberStrs[0];
        const divisor = numberStrs[1];
        return (isNaN(dividend) || isNaN(divisor)) || Number(divisor) === 0 ? "invalid number" : Number(dividend) / Number(divisor);
      }
    }
    
    //there should only be 0 or 1 slash
    return "invalid number";
  };
  
  this.getUnit = function(input) {
    //getting letters at the end and convert to lower case
    const unitStr = String(input).match(/[a-z]*$/i)[0].toLowerCase();
    
    if (["gal", "l", "mi", "km", "lbs", "kg"].includes(unitStr)) {
      //convert 'l' back to 'L'
      if (unitStr === "l") {
        return "L";
      }
      return unitStr;
    }

    return "invalid unit";
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case "gal":
        return "L";
      case "L":
        return "gal";
      case "mi":
        return "km";
      case "km":
        return "mi";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case "gal":
        return "gallons";
      case "L":
        return "liters";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch(initUnit) {
      case "gal":
        return Math.round(initNum * galToL * 100000) / 100000;
      case "L":
        return Math.round(initNum / galToL * 100000) / 100000;
      case "mi":
        return Math.round(initNum * miToKm * 100000) / 100000;
      case "km":
        return Math.round(initNum / miToKm * 100000) / 100000;
      case "lbs":
        return Math.round(initNum * lbsToKg * 100000) / 100000;
      case "kg":
        return Math.round(initNum / lbsToKg * 100000) / 100000
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
