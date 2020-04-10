import React from "react";

import Header from "../Header";
import InputsFields from "../InputsFields";
import ErrorComponent from "../ErrorComponent";
import Service from "../../service";

import "./app.css";

class App extends React.Component {
  state = { arrErrors: [] };

  service = new Service();

  transformerData = (userData) => {
    const arrNew = [];

    for (const key in userData) {
      const data = userData[key];

      for (const label in data) {
        arrNew.push(`${label} ${data[label]}`);

        this.setState({
          arrErrors: arrNew,
        });
      }
    }
  };

  onChangeForm = (userData) => {
    if (userData === undefined) {
      this.setState({
        arrErrors: [],
      });
      alert("Вы успешно зарегистрировались!");
    } else {
      this.transformerData(userData);
    }
  };

  onSubmit = (userData) => {
    return this.service.requestData(userData).then(this.onChangeForm);
  };

  render() {
    const errorMessage = this.state.arrErrors;

    return (
      <div className="app">
        <Header />
        <ErrorComponent errorMessage={errorMessage} />
        <InputsFields onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
