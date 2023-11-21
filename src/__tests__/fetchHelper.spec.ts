import fetchHelper, { type FetchRequestOptions } from '@/helpers/fetchHelper';
import { expect, test } from 'vitest';

// Mock fetch function
global.fetch = async (url) => {
  if (url === 'https://example.com/success') {
    return {
      ok: true,
      json: async () => ({ success: true }),
    } as Response;
  }
  return {
    ok: false,
    status: 404,
    json: async () => ({ error: 'Not Found' }),
  } as Response;
};

test('fetchHelper - successful GET request', async () => {
  const requestOptions: FetchRequestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetchHelper('https://example.com/success', requestOptions);
  expect(response).toEqual({ success: true });
});

test('fetchHelper - failed GET request', async () => {
  const requestOptions: FetchRequestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    await fetchHelper('https://example.com/fail', requestOptions);
  } catch (error) {
    if (error instanceof Error) {
      expect(error.message).toBe('Request failed with status 404');
    }
  }
});
