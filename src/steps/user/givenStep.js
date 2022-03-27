const { Given } = require('@cucumber/cucumber');

Given('A request body {}', function (request) {
  this.request = JSON.parse(request);
});

Given('A user {int} exist', async function (id) {
  this.id = id;
});
