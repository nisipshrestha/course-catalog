const ToggleIcon = ({ onToggle, toggle }) => {
  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        onClick={(e) => onToggle(e.target.checked)}
      />
      <label htmlFor="toggle" className="toggle-icon flex">
        <i className={`fas fa-${toggle ? "times" : "bars"}`} />
      </label>
    </>
  );
};

export default ToggleIcon;
