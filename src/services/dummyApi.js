const BASE_URL = "https://dummyjson.com";

export async function getLaptops() {
  const response = await fetch(`${BASE_URL}/products/category/laptops`);

  if (!response.ok) {
    throw new Error("Error al obtener laptops");
  }

  return response.json();
}
