export const fetchCategories = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/categories`);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
