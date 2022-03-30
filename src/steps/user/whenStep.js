const { When } = require('@cucumber/cucumber');
const restHelper = require('../../util/restHelper');
require('dotenv').config();

When('I send POST request to {string}', async function (path) {
  const response = await restHelper.postData(
    `${process.env.SERVICE_URL}${path}`,
    this.request
  );
  this.response = response;
});

When('I send GET request to {string}', async function (path) {
  this.response = await restHelper.getData(`${process.env.SERVICE_URL}${path}`);
});

When('I send PUT request to {string}', async function (path) {
  const response = await restHelper.putData(
    `${process.env.SERVICE_URL}${path}`,
    this.request
  );
  this.response = response;
});

When('I send DELETE request to {string}', async function (path) {
  const response = await restHelper.deleteData(
    `${process.env.SERVICE_URL}${path}`
  );
  this.response = response;
});
