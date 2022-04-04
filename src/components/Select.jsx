import React from "react";

const Select = ({ data, name }) => {
  return (
    <select name={name} id={`${name}_id`}>
      <option value="" defaultValue disabled>
        {`Choose ${name}`}
      </option>
      {data.map((item, idx) => {
        return (
          <option key={idx} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
