import React from "react";

function PopupWithForm({ title, name, children, isOpen, onClose, buttonText }) {
  return (
    <section className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          id={`form-${name}`}
          className={`popup__form popup__form-content popup__form-content_${name}`}
          name={`form-${name}`}
          noValidate
        >
          {children}
          <button
            type="submit"
            className="popup__create-button popup__button popup__button_invalid"
            disabled
          >
            {buttonText}
          </button>
        </form>
        <button
          className={`popup__close-button popup__close-button_${name}`}
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
