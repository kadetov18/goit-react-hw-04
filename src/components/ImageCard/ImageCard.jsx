import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => (
  <div className={s.card}>
    <img src={src} alt={alt} className={s.image} onClick={onClick} />
  </div>
);

export default ImageCard;
