import "./course.css";

const statusMap = ["Course Ended", "Active", "Ongoing Stream"];

const Course = ({
  title,
  imgUrl,
  status,
  fromDate,
  toDate,
  joinableStatus,
  isJoinable,
  type,
}) => {
  return (
    <section className="course-wrapper grid">
      <div className="img-wrapper">
        <img src={imgUrl} alt={title} loading="lazy" />
      </div>
      <div className="title-wrapper flex">
        <i
          title={type}
          className={`fa-solid fa-${type === "Course" ? "sitemap" : "table"}`}
        ></i>
        <h3>{title}</h3>
      </div>
      <div className="status-wrapper flex">
        <span className={`status status-${status}`}>{statusMap[status]}</span>
        {Boolean(fromDate && toDate) && (
          <span className="date">
            From <span>{fromDate}</span>&emsp;To <span>{toDate}</span>
          </span>
        )}
      </div>

      <div className="btn-wrapper">
        <button disabled={!isJoinable} className="course-btn" type="button">
          {joinableStatus}
        </button>
      </div>
    </section>
  );
};

export default Course;
