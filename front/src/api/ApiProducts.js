import toast from "react-hot-toast";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
export const createProduct = async (formData) => {
  const res = await fetch(`${BACKEND_URL}/products`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    toast.error("Error al crear el producto ❌");
    console.error(
      "Error al crear el producto:",
      data.message || "error desconocido"
    );
    throw new Error(data.message || "Error al crear el producto");
  }

  return data;
};

export const updateProduct = async (id, formData) => {
  try {
    const response = await fetch(`${BACKEND_URL}/products/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      toast.error("Error al actualizar el producto ❌");
      throw new Error("No se pudo actualizar el producto");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await fetch(`${BACKEND_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (res.status === 204) {
      toast.success("Producto eliminado con éxito 🚗");
      return true;
    } else {
      toast.error("Error al eliminar el producto ❌");
      const data = await res.json();
      console.error(
        "error al eliminar el producto",
        data.message || "error desconocido"
      );
      return false;
    }
  } catch (error) {
    console.error("Error de red al eliminar el producto:", error);
    return false;
  }
};
