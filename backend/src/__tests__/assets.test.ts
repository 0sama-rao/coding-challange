import request from 'supertest';
import { app, startServer } from '../index';

let server: any;

beforeAll(async () => {
  // starting server before running test
  server = await startServer(); 
});

afterAll(async () => {

  //after test server should be closed
  await server.close();
});

describe('Assets APIs', () => {
  let testAssetId: number;

  it('Test to fetch all assets', async () => {
    const response = await request(app).get('/api/assets');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('Test to add a new asset', async () => {
    const newAsset = { name: 'Test Asset', value: 1000, currency: 'USD' };
    const response = await request(app).post('/api/assets').send(newAsset);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(newAsset.name);
    testAssetId = response.body.id;
  });

  it('Test to update an asset', async () => {
    const updatedAsset = { name: 'Updated Asset', value: 1500 };
    const response = await request(app).patch(`/api/assets/${testAssetId}`).send(updatedAsset);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedAsset.name);
    expect(response.body.value).toBe(updatedAsset.value);
  });

  it('Test to delete an asset', async () => {
    const response = await request(app).delete(`/api/assets/${testAssetId}`);
    expect(response.status).toBe(204);
  });
});
