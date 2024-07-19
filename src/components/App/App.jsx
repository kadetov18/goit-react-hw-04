import React, { useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import Header from "../Header/Header";
import s from "./App.module.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={s.app}>
      <Header onSearch={handleSearch} />
      <ImageGallery query={query} onImageClick={openModal} />
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
