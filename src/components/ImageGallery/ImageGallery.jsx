import React from "react";
import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => (
  <div className={s.gallery}>
    {images.map((image) => (
      <ImageCard
        key={image.id}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image)}
      />
    ))}
  </div>
);

export default ImageGallery;
