import React from "react";
import './style.css';

export default function Button({ title, disabled }) {
  return (
    <div className="form-button-box">
      <button
        className="form__button button"
        type="submit"
        id="submitButton"
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
}
