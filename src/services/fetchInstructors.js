export const fetchInstructors = async () => {
  try {
    const response = await fetch("http://localhost:5500/instructors");
    return await response.json();
  } catch (error) {
    throw error;
  }
};
