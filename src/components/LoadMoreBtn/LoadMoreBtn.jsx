import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick, loadMoreRef }) => (
  <button className={s.btn} onClick={onClick} ref={loadMoreRef}>
    Load more
  </button>
);

export default LoadMoreBtn;
