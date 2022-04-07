import React from "react";

const Select = ({ data, name, onSelect }) => {
  const handleChange = (event) => {
    const selectValue = event.target.value;

    onSelect(name, selectValue.toString());
  };

  return (
    <select name={name} id={`${name}_id`} onChange={handleChange}>
      <option value="" defaultValue disabled>
        {`Choose ${name}`}
      </option>
      {data.map((item, idx) => {
        if (typeof item !== "object") {
          return (
            <option key={idx} value={item}>
              {item}
            </option>
          );
        }
        return (
          <option key={idx} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
