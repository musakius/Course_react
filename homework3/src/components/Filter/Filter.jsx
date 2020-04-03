import React from "react";
import s from "./Filter.module.css";

class Filter extends React.Component {
  render() {
    return (
      <div className={s["filter"]}>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Done</button>
      </div>
    );
  }
}

export default Filter;
