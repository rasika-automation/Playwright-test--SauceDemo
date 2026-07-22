import { test, expect } from '@playwright/test';

test('GET users API', async ({ request }) => {

  const response = await request.get('https://reqres.in/api/users?page=2');

  expect(response.status()).toBe(200);
});