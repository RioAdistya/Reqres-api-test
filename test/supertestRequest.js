const request = require('supertest');

describe('Test Method Route Request ', () => {
  it('List User In Page 2', async () => {
    const response = request('https://reqres.in').get('/api/users?pages=2');
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Single User', async () => {
    const response = request('https://reqres.in').get('/api/users/2');
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Single User Not Found', async () => {
    const response = request('https://reqres.in').get('/api/users/23');
    console.log((await response).status);
    console.log((await response).body);
  });
  it('List <Resource>', async () => {
    const response = request('https://reqres.in').get('/api/unknown');
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Single <Resource>', async () => {
    const response = request('https://reqres.in').get('/api/unknown/2');
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Single <Resource> Not Found', async () => {
    const response = request('https://reqres.in').get('/api/unknown/24');
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Delayed Response', async () => {
    const response = request('https://reqres.in').get('/api/users?=3');
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Success create user', async () => {
    const response = request('https://reqres.in').post('/api/users').send({
      name: 'morpheus',
      job: 'leader',
    });
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Success Register', async () => {
    const response = request('https://reqres.in').post('/api/register').send({
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    });
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Unsuccess Register', async () => {
    const response = request('https://reqres.in').post('/api/register').send({
      email: 'sydney@fife',
    });
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Success Login', async () => {
    const response = request('https://reqres.in').post('/api/login').send({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    });
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Unsuccess Login', async () => {
    const response = request('https://reqres.in').post('/api/login').send({
      email: 'peter@klaven',
    });
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Put Update', async () => {
    const response = request('https://reqres.in').put('/api/users/2').send({
      name: 'morpheus',
      job: 'zion resident',
    });
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Put Update', async () => {
    const response = request('https://reqres.in').patch('/api/users/2').send({
      name: 'morpheus',
      job: 'zion resident',
    });
    console.log((await response).status);
    console.log((await response).body);
  });
  it('Put Update', async () => {
    const response = request('https://reqres.in').delete('/api/users/2');
    console.log((await response).status);
    console.log((await response).body);
  });
});
