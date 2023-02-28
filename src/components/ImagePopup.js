import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup_card ${props.card.link ? "popup_opened" : ""}`}
    >
      <div className="popup__card-wrap">
        <figure className="popup__card-figure">
          <button
            onClick={props.onClose}
            className="popup__close-button popup__close-button_card"
            type="button"
          ></button>
          <img
            className="popup__card-img"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="popup__card-subtitle">
            {props.card.name}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;
