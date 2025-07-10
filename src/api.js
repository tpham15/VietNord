// src/api.js
const API = import.meta.env.VITE_API_URL || '';

/**
 * POST a contact message
 * @param {{ name: string; email: string; message: string }} data
 */
export async function postContact(data) {
  const res = await fetch(`${API}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to send contact');
  }
  return res.json();
}

/**
 * POST a sample request
 * @param {{
 *   name: string;
 *   email: string;
 *   productId: string;
 *   quantity: number;
 *   notes?: string;
 * }} data
 */
export async function postSampleRequest(data) {
  const res = await fetch(`${API}/api/sample`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'Failed to request sample');
  }
  return res.json();
}
