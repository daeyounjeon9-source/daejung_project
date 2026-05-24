const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8080";

export async function apiGet(path, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  });
  if (!res.ok) throw new Error(`API_ERROR_${res.status}`);
  return res.json();
}

export async function apiPost(path, data, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error(`API_ERROR_${res.status}`);
  return res.json();
}

export { API_BASE };
