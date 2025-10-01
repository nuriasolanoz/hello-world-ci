const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('displays Hello World on the main page', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toMatch(/Hello World/i);
  });
});
