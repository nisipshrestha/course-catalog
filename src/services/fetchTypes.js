export const fetchTypes = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/types`);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
