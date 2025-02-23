export async function GetProducts() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const res = await fetch(`${BACKEND_URL}/products`);
  const data = await res.json();
  return data;
}
