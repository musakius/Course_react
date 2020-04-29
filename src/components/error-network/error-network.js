import React from "react";
import { connect } from "react-redux";
import "./error-network.css";

const ErrorNetwork = ({ errorMessage }) => {
  return <div>{errorMessage}</div>;
};

const mapStateToProps = ({ errorMessage }) => {
  return { errorMessage };
};

export default connect(mapStateToProps)(ErrorNetwork);
