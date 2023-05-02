export const fetchCourses = async () => {
  try {
    const response = await fetch("http://localhost:5500/courses");
    return await response.json();
  } catch (error) {
    throw error;
  }
};
