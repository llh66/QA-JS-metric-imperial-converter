# Metric-Imperial Converter

This is a metric-imperial converter app with quality assurance. It is developed based on a template.
The app can convert between 'gal' and 'L', 'lbs' and 'kg', and  'mi' and 'km'.
Unit input can be in lowercase or uppercase.
Users can use fractions, decimals, or both in the parameter (ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.

My code implemented:
1. functions of the converter: [controllers/convertHandler.js](https://github.com/llh66/QA-JS-metric-imperial-converter/blob/main/controllers/convertHandler.js)
2. API route of the app: [routes/api.js](https://github.com/llh66/QA-JS-metric-imperial-converter/blob/main/routes/api.js)
3. unit tests: [/tests/1_unit-tests.js](https://github.com/llh66/QA-JS-metric-imperial-converter/blob/main/tests/1_unit-tests.js)
4. functional tests: [/tests/2_functional-tests.js](https://github.com/llh66/QA-JS-metric-imperial-converter/blob/main/tests/2_functional-tests.js)

Example:
- input: 1.5/3gal
- output: {"initNum":0.5,"initUnit":"gal","returnNum":1.89271,"returnUnit":"L","string":"0.5 gallons converts to 1.89271 liters"}
