import "./checkbox.css";

const Checkbox = ({ label, id, name, onChange, checked, value }) => {
  return (
    <div className="checkbox-wrapper flex">
      <input
        className="custom-checkbox"
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
