const assert = require('assert');
const { Then } = require('@cucumber/cucumber');

Then('I get response code {int}', async function (code) {
  assert.equal(this.response.status, code);
});

Then('Response contains {string}', async function (property) {
  assert.property(this.response.data, property);
});

Then('Response has id value {int}', async function (value) {
  assert.equal(this.response.data.data.id, value);
});

Then('Response has {string} value {string}', async function (property, value) {
  assert.equal(this.response.data[property], value);
});
