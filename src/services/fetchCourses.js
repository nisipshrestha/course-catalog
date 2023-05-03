export const fetchCourses = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/courses`);
    return await response.json();
  } catch (error) {
    throw error;
  }
};
