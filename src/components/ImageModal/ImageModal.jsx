import React from "react";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>
          &times;
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.modalImage}
        />
      </div>
    </div>
  );
};

export default ImageModal;
