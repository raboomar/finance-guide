import React from "react";
import { useSelector } from "react-redux";

const Month = () => {
  const { month, year } = useSelector((state) => state.month);
  return (
    <div className="me-4">
      <h3>{`${month} ${year}`}</h3>
    </div>
  );
};

export default Month;
