import React from "react";
import "../../src/index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
        <input
          type="submit"
          value="Сохранить"
          className="popup__save-button popup__button"
        />
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        <input
          type="submit"
          value="Создать"
          className="popup__create-button popup__button popup__button_invalid"
          disabled
        />
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
        <input
          type="submit"
          value="Сохранить"
          className="popup__create-button popup__button popup__button_invalid"
          disabled
        />
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="delete">
        <input type="submit" value="Да" className="popup__delete-button" />
      </PopupWithForm>
    </div>
  );
}

export default App;
