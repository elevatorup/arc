/*eslint no-unused-vars: [0] no-console: ["error", { allow: ["info", "error"] }] */

// Dependencies
// ------------
const slug   = require(`slug`);
const chai   = require(`chai`);
const should = chai.should();
const expect = chai.expect;
const { defineSupportCode: cucumber } = require(`cucumber`);

cucumber(({Given, When, Then}) => {
  // Environmental variables
  // -----------------------
  Given(/^a system has an environmental variable set called (.*)$/, function(environmentalVariable, done){
    if(process.env[environmentalVariable] === undefined){
      throw new Error(`Missing variable in process that is loaded from the .env file, ${environmentalVariable} - set this value to at least something blank like: ${environmentalVariable}=""`);
    }
    done();
  });
});