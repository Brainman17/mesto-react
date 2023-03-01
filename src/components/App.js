import React, { useState } from "react";
import "../../src/index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfile() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlace() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(selectedCard) {
    setSelectedCard(selectedCard);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfile}
        onAddPlace={handleAddPlace}
        onEditAvatar={handleEditAvatar}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Имя"
          className="popup__input popup__form-subtitle popup__form-subtitle_value_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="name-error"></span>
        <input
          type="text"
          id="job"
          name="about"
          placeholder="Кто я?"
          className="popup__input popup__form-subtitle popup__form-subtitle_value_job"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="job-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText="Создать"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Название"
          className="popup__input popup__form-subtitle popup__form-subtitle_create popup__form-subtitle_value_title"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="name-add-error"></span>
        <input
          type="url"
          id="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__form-subtitle popup__form-subtitle_create popup__form-subtitle_value_link"
          required
        />
        <span id="url-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
      >
        <input
          type="url"
          id="avatar"
          name="avatar"
          placeholder="Ссылка на картинку"
          className="popup__input popup__form-subtitle popup__form-subtitle_create popup__form-subtitle_value_link"
          required
        />
        <span id="avatar-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="delete"
        buttonText="Да"
      ></PopupWithForm>
    </div>
  );
}

export default App;
