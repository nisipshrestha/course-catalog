export const fetchInstructors = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/instructors`
    );
    return await response.json();
  } catch (error) {
    throw error;
  }
};
