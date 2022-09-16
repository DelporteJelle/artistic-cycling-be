import React from "react";
import cx from "clsx";

const InputField = ({
  name,
  label = name,
  onChange,
  pending = false,
  messages = [],
  value,
  className
}) => {
  return (
    <div className={cx("form-input", pending && "pending", className)}>
      <label htmlFor={name}>
        <strong>{label}</strong>
        {messages.length ? (
          <span className="validation-message">{messages[0]}</span>
        ) : null}
      </label>
      <input
        className="input"
        name={name}
        onChange={handleChange}
        autoComplete="off"
        autoCorrect="off"
        value={value}
      />
    </div>
  );

  function handleChange(e) {
    onChange(name, e.target.value);
  }
};

export default InputField;
