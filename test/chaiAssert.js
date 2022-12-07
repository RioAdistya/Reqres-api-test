const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');
const assert = require('chai').assert;

describe('App', function () {
  it('app should return welcome message', function () {
    assert.equal(app(), 'welcome to api Home');
  });
});

describe('Get Request List Users', () => {
  const response = request('https://reqres.in').get('/api/users?page=2');
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });
  it('response body to have property', async () => {
    expect((await response).body).to.haveOwnProperty('page');
    expect((await response).body).to.haveOwnProperty('total');
    expect((await response).body).to.haveOwnProperty('data');
  });
});

describe('Get Request Single User', () => {
  const response = request('https://reqres.in').get('/api/users/2');
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });
  it('response body to have property', async () => {
    expect((await response).body).to.haveOwnProperty('data');
    expect((await response).body).to.haveOwnProperty('support');
  });
});

describe('Get Request Single User Not Found', () => {
  const response = request('https://reqres.in').get('/api/users/23');
  it('response status equal to 404', async () => {
    expect((await response).status).to.equal(404);
  });
  it('response body to have property', async () => {});
});

describe('Get Request List <Resource>', () => {
  const response = request('https://reqres.in').get('/api/unknown');
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });
  it('response body to have property', async () => {
    expect((await response).body).to.haveOwnProperty('page');
    expect((await response).body).to.haveOwnProperty('total');
    expect((await response).body).to.haveOwnProperty('data');
  });
});

describe('Get Request Single <Resource>', () => {
  const response = request('https://reqres.in').get('/api/unknown/2');
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });
  it('response body to have property', async () => {
    expect((await response).body).to.haveOwnProperty('data');
    expect((await response).body).to.haveOwnProperty('support');
  });
});

describe('Get Request Single <Resource> Not Found', () => {
  const response = request('https://reqres.in').get('/api/unknown/23');
  it('response status equal to 404', async () => {
    expect((await response).status).to.equal(404);
  });
  it('response body to have property', async () => {});
});

describe('Post Request Create', () => {
  const response = request('https://reqres.in').post('/api/users').send({
    name: 'rioadistya',
    job: 'leaders',
  });
  it('response status equal to 201', async () => {
    expect((await response).status).to.equal(201);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`name`);
    expect((await response).body).to.haveOwnProperty(`job`);
    expect((await response).body).to.haveOwnProperty(`createdAt`);
  });
});

describe('Put Request Update', () => {
  const response = request('https://reqres.in').put('/api/users/2').send({
    name: 'morpheus',
    job: 'zion resident',
  });
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`name`);
    expect((await response).body).to.haveOwnProperty(`job`);
    expect((await response).body).to.haveOwnProperty(`updatedAt`);
  });
});

describe('Patch Request Update', () => {
  const response = request('https://reqres.in').patch('/api/users/2').send({
    name: 'morpheus',
    job: 'zion resident',
  });
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`name`);
    expect((await response).body).to.haveOwnProperty(`job`);
    expect((await response).body).to.haveOwnProperty(`updatedAt`);
  });
});

describe('Delete Request ', () => {
  const response = request('https://reqres.in').delete('/api/users/2');
  it('response status equal to 204', async () => {
    expect((await response).status).to.equal(204);
  });
});

describe('Post Request Register Successfull', () => {
  const response = request('https://reqres.in').post('/api/register').send({
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  });
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`token`);
  });
});

describe('Post Request Register Unsuccessfull', () => {
  const response = request('https://reqres.in').post('/api/register').send({
    // email: 'sydney@fife',
    password: 'pistol',
  });
  it('response status equal to 400', async () => {
    expect((await response).status).to.equal(400);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`error`);
  });
});
describe('Post Request Login Successfull', () => {
  const response = request('https://reqres.in').post('/api/login').send({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`token`);
  });
});

describe('Post Request Login Unsuccessfull', () => {
  const response = request('https://reqres.in').post('/api/login').send({
    email: 'peter@klaven',
  });
  it('response status equal to 400', async () => {
    expect((await response).status).to.equal(400);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`error`);
  });
});

describe('Get Request Delayed Response', () => {
  const response = request('https://reqres.in').get('/api/users?delay=3');
  it('response status equal to 200', async () => {
    expect((await response).status).to.equal(200);
  });

  it('response body to haveOwnProperty', async () => {
    expect((await response).body).to.haveOwnProperty(`page`);
    expect((await response).body).to.haveOwnProperty(`total`);
    expect((await response).body).to.haveOwnProperty(`data`);
  });
});
