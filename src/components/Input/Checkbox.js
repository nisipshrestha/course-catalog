const Checkbox = ({ label, name, onChange, checked, value }) => {
  return (
    <div className="checkbox-wrapper flex">
      <input
        className="custom-checkbox"
        type="checkbox"
        name={name}
        id={name}
        onChange={onChange}
        checked={checked}
        value={value}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
