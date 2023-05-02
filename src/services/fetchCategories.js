export const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:5500/categories");
    return await response.json();
  } catch (error) {
    throw error;
  }
};
