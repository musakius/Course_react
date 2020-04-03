import React from "react";
import "./TodoListItem.css";

class TodoListItem extends React.Component {
  state = {
    done: false
  };

  toggleDone() {
    this.setState(prevState => {
      return {
        done: !prevState.done
      };
    });
  }

  removeHandler() {
    this.props.onDelete();
  }

  makeImportant() {
    this.props.onImportant();
  }

  render() {
    const { important = false, label } = this.props;
    const { done } = this.state;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    let className = `todo_list`;

    if (done) {
      className += " done";
    }

    return (
      <li className="item">
        <span
          className={className}
          style={style}
          onClick={() => this.toggleDone()}
        >
          {label}
        </span>
        <div>
          <button className="removeItem" onClick={() => this.removeHandler()}>
            <i className="far fa-trash-alt"></i>
          </button>
          <button className="detailsItem" onClick={() => this.makeImportant()}>
            <i className="fas fa-info"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
