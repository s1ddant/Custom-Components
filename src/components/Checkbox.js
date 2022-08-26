import { useState } from "react";
import '../css/Checkbox.css'


const Checkbox = ({ id, label, checked, ...props }) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);


  return (
    <div className="checkbox-wrapper">
        <input 
        id={id}
        type="checkbox" 
        checked={isChecked} 
        onChange={() => setIsChecked((prev) => !prev)} {...props} 
        className={isChecked ? "checked" : ""} 
        />
        <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default Checkbox;