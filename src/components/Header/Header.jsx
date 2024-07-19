import React from "react";
import s from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ onSearch }) => {
  return (
    <header className={s.header}>
      <SearchBar onSubmit={onSearch} />
    </header>
  );
};

export default Header;
