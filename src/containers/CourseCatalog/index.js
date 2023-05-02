import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import "./course-catalog.css";
import Course from "../../components/Course";
import { fetchCourses } from "../../services/fetchCourses";
import { fetchTypes } from "../../services/fetchTypes";
import { fetchInstructors } from "../../services/fetchInstructors";
import { fetchCategories } from "../../services/fetchCategories";

const initialFilter = {
  course: "",
  categoryFilter: "",
  categories: [],
  instructors: [],
  types: [],
};
const CourseCatalog = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filterCollection, setFilterCollection] = useState({
    types: [],
    categories: [],
    instructors: [],
  });

  const [filterData, setFilterData] = useState(initialFilter);

  useEffect(() => {
    (async () => {
      const tempCourses = await fetchCourses();
      setCourseList(tempCourses);
      setFilteredList(tempCourses);

      const tempFilterCollection = {};
      if (filterCollection.types.length === 0)
        tempFilterCollection.types = await fetchTypes();
      if (filterCollection.instructors.length === 0)
        tempFilterCollection.instructors = await fetchInstructors();
      if (filterCollection.categories.length === 0)
        tempFilterCollection.categories = await fetchCategories();
      setFilterCollection(tempFilterCollection);
    })();
  }, []);

  const handleToggle = (param) => setToggleFilter((state) => param || !state);

  /* Filter courses based on filter data. */
  function filterHelper(param) {
    let result = true;

    setFilteredList(
      courseList.filter((each) => {
        result = true;
        if (param.course)
          result =
            result &&
            each.title.toLowerCase().includes(param.course.toLowerCase());
        if (param.categories.length > 0) {
          result = result && param.categories.includes(each.category);
        }
        if (param.types.length > 0) {
          result = result && param.types.includes(each.type);
        }
        if (param.instructors.length > 0) {
          result = result && param.instructors.includes(each.instructor);
          console.log(param.instructors, result);
        }
        return result;
      })
    );
  }
  /* Add, remove items in a list. */
  function toggleList(list, value) {
    if (list.includes(value)) return list.filter((each) => each !== value);
    return list.concat(value);
  }

  function handleSearch(e) {
    const { name, value, checked } = e.target;
    /* New memory allocation for entire filterData object tree. */
    const tempFilterData = JSON.parse(JSON.stringify(filterData));
    switch (name) {
      case "course":
        tempFilterData[name] = value;
        break;
      case "categoryFilter":
        tempFilterData[name] = value;
        break;
      case "allCategories":
        tempFilterData.categories = checked ? filterCollection.categories : [];
        break;
      case "allInstructors":
        tempFilterData.instructors = checked
          ? filterCollection?.instructors
          : [];
        break;
      case "category":
        tempFilterData.categories = toggleList(filterData.categories, value);
        break;
      case "type":
        tempFilterData.types = toggleList(filterData.types, value);
        break;
      case "instructor":
        tempFilterData.instructors = toggleList(filterData.instructors, value);
        break;
      default:
        break;
    }

    filterHelper(tempFilterData);
    setFilterData(tempFilterData);
  }
  function handleReset() {
    setFilteredList(courseList);
    setFilterData(initialFilter);
  }

  /* Status Info
  ---------------------
    0 - Course Ended
    1 - Active
    2 - Ongoing Stream
  */

  return (
    <div
      className={`courses-container ${toggleFilter ? "filter-open" : ""} grid`}
    >
      <Filter
        onToggle={handleToggle}
        toggle={toggleFilter}
        onReset={handleReset}
        onSearch={handleSearch}
        filterData={filterData}
        filterCollection={filterCollection}
      />

      <div className="courses-wrapper grid">
        <h2>Courses &amp; Streams</h2>

        <div className="courses grid">
          {filteredList.map((eachCourse) => (
            <Course key={eachCourse.id} {...eachCourse} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;
