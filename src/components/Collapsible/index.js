import { useState } from "react";
import "./collapsible.css";

const Collapsible = ({ label, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="collapsible-container">
      <button className="flex" onClick={() => setOpen((state) => !state)}>
        {label}
        <i className={`fa-solid fa-caret-${open ? "up" : "down"}`}></i>
      </button>

      <div className={`content ${open ? "visible" : ""}`}>
        {open && children}
      </div>
    </div>
  );
};

export default Collapsible;
