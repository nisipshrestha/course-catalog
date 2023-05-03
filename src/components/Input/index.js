import "./input.css";

const TextField = ({ name, onChange, value, placeholder, type }) => {
  return (
    <>
      <input
        className="custom-textfield"
        type={type || "text"}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default TextField;
