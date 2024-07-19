import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => (
  <div className={s.card} onClick={onClick}>
    <img src={src} alt={alt} className={s.image} />
  </div>
);

export default ImageCard;
