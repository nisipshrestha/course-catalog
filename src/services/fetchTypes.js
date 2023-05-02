export const fetchTypes = async () => {
  try {
    const response = await fetch("http://localhost:5500/types");
    return await response.json();
  } catch (error) {
    throw error;
  }
};
