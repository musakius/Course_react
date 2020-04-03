import React from "react";
import s from "./SearchPanel.module.css";

function SearchPanel() {
  return (
    <input className={s["input_search"]} type="text" placeholder="Search" />
  );
}

export default SearchPanel;
