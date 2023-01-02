import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./loading.css";
const Loading = () => {
  return (
    <Spinner animation="border" role="status" className="loading">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loading;
