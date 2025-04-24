export const GetProducts = async () => {
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${BACKEND_URL}/products`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
