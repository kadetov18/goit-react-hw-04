import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./ImageGallery.module.css";
import Loader from "../Loader/Loader";
import ImageCard from "../ImageCard/ImageCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const API_KEY = "coI5w_rajcJLvv4R6rcZHiNKF1-Ee1SzV-cv6sTvgGc";

const ImageGallery = ({ query, onImageClick }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}&page=${page}&per_page=12`
        );
        setImages((prevImages) =>
          page === 1
            ? response.data.results
            : [...prevImages, ...response.data.results]
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className={s.gallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          onClick={() => onImageClick(image)}
        />
      ))}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
    </div>
  );
};

export default ImageGallery;
