/* Simple API helper functions */

const BASE_URL = process.env.REACT_APP_API_URL || 'https://mockapi.example.com';

/**
 * Helper to call API and parse JSON
 */
async function request(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `API ${response.status} ${response.statusText}: ${errorText}`
    );
  }

  return response.json();
}

export const fetchGardens = () => request('/gardens');

export const fetchNotifications = () => request('/notifications');

export const login = (username, password) =>
  request('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

export const signup = (data) =>
  request('/signup', {
    method: 'POST',
    body: JSON.stringify(data),
  }); 