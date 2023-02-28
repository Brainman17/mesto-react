import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <img
        src={props.src}
        alt={props.title}
        className="card__image"
        onClick={handleCardClick}
      />
      <button className="card__delete-button" type="button"></button>
      <div className="card__wrapper">
        <h2 className="card__subtitle">{props.title}</h2>
        <div className="card__like-wrap">
          <button className="card__heart-button" type="button"></button>
          <span className="card__like-counter">{props.like.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
