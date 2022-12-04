import React from "react";

const Month = () => {
  let today = new Date();

  let month = today.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  return (
    <div className="me-4">
      <h3>{month}</h3>
    </div>
  );
};

export default Month;
