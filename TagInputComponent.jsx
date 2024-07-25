import React, { useState, useEffect } from "react";
import "../src/TagInputComponent.css";

const TagInputComponent = ({ label, value, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [value]);

  const addTag = (event) => {
    const newValue = event.target.value.trim();
    if ((event.key === "Enter" || event.key === "13") && newValue !== "") {
      event.preventDefault();
      onChange([...value, newValue]);
      setInputValue("");
    }
  };

  const removeTag = (indexToRemove) => {
    onChange(value.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="tag-input-component">
      <h3>{label}:</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={addTag}
        className="tag-input"
        placeholder={`Press enter to add ${label}`}
      />
      <div className="tag-input-container">
        {value.map((tag, index) => (
          <div className="tag-sample" key={index}>
            <span>{tag}</span>
            <button onClick={() => removeTag(index)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInputComponent;
