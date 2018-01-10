const request = require('supertest');
const app = require('./index');

describe('Test the /test path', () => {
  test('It should response the GET method', done => {
    request(app).get('/test').then(response => {
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({ message: 'test' });
      done();
    })
  })
})