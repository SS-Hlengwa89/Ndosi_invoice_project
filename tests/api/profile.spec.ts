import { test, expect } from '@playwright/test';

test.describe('Profile API Tests', () => {

  test('GET profile - validate response', async ({ request }) => {

    const response = await request.get('/APIDEV/profile', {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.success).toBe(true);
    expect(body.message).toBe('Profile retrieved successfully');

    expect(body.data).toBeDefined();

    expect(body.data.Id).toBeDefined();
    expect(typeof body.data.Id).toBe('string');

    expect(body.data.Id.length).toBeGreaterThan(0);
  });


  test('GET profile - validate profile fields', async ({ request }) => {

    const response = await request.get('/APIDEV/profile', {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    const profile = body.data;

    expect(profile).toBeDefined();

    expect(profile.Id).toBeDefined();
    expect(typeof profile.Id).toBe('string');

    expect(profile.Id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );

    expect(Object.keys(profile).length).toBeGreaterThan(0);
  });


  test('GET profile - handle invalid endpoint', async ({ request }) => {

    const response = await request.get('/APIDEV/profile/invalid', {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    expect(response.status()).not.toBe(200);

    expect(response.status()).toBeGreaterThanOrEqual(400);
  });

});