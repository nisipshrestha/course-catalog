import TextField from "./TextField";

const SearchField = ({ name, onChange, value, placeholder }) => {
  return (
    <div className="search-wrapper">
      <i className="fa-solid fa-magnifying-glass"></i>
      <TextField
        className="custom-textfield"
        type="search"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default SearchField;
