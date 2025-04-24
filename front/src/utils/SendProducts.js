export const UseSendProducts = async (
  formData,
  products,
  setImage,
  e,
  setLoding,
  setError
) => {
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  const res = await fetch(`${BACKEND_URL}/products`, {
    method: "POST",
    body: formData,
  })
    .catch((err) => {
      console.log(err);
      setLoding(false);
      setError(err.message);
    })
    .finally(() => {
      setImage(null);
      e.target.reset();
      setLoding(false);
    });

  const data = await res.json();
  products.push(data);
};
