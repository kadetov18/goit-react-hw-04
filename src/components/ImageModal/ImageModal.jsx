import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root"); // Вкажемо, де знаходиться основний елемент додатку

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button className={s.closeButton} onClick={onClose}>
        &times;
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={s.modalImage}
      />
    </Modal>
  );
};

export default ImageModal;
