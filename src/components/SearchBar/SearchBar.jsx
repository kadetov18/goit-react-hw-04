import React, { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search term.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <button type="submit" className={s.button}>
          <IoIosSearch />
        </button>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          className={s.input}
        />
      </form>
    </header>
  );
};

export default SearchBar;
