import React from "react";

function Card({ card, title, like, src, ...props }) {
  function handleCardClick() {
    props.onCardClick(card);
  }

  return (
    <article className="card">
      <img
        src={src}
        alt={title}
        className="card__image"
        onClick={handleCardClick}
      />
      <button className="card__delete-button" type="button"></button>
      <div className="card__wrapper">
        <h2 className="card__subtitle">{title}</h2>
        <div className="card__like-wrap">
          <button className="card__heart-button" type="button"></button>
          <span className="card__like-counter">{like.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
