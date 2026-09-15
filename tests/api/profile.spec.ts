import { test, expect } from '@playwright/test';

const API_BASE_URL = 'https://www.ndosiautomation.co.za';

async function getAuthToken(request: any): Promise<string> {

  const response = await request.post(
    `${API_BASE_URL}/APIDEV/login`,
    {
      data: {
        email: process.env.TEST_EMAIL,
        password: process.env.TEST_PASSWORD,
      },
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.success).toBe(true);

  const token =
    body.token ||
    body.data?.token ||
    body.access_token ||
    body.data?.access_token;

  expect(token).toBeDefined();

  return token;
}


test.describe.configure({ mode: 'serial' });

test.describe('Profile API Tests', () => {

  test('GET profile - validate response', async ({ request }) => {

    const token = await getAuthToken(request);

    const response = await request.get(
      `${API_BASE_URL}/APIDEV/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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

    const token = await getAuthToken(request);

    const response = await request.get(
      `${API_BASE_URL}/APIDEV/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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

    const token = await getAuthToken(request);

    const response = await request.get(
      `${API_BASE_URL}/APIDEV/profile/invalid`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    expect(response.status()).toBe(404);
  });

});