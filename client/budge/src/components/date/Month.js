import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateCurrentMonth } from "../../features/month/monthSlice";
import {
  fetchUserExpense,
  fetchUserExpenseByCategory,
} from "../../features/expense/expenseSlice";
import { Form, InputGroup } from "react-bootstrap";
import { useRef } from "react";

const Month = () => {
  const dispatch = useDispatch();
  const { inDate } = useSelector((state) => state.month);
  const currentDate = useRef();
  const [dat, setDat] = useState(inDate);

  const handleDate = (e) => {
    let selectedYear = currentDate.current.value.substr(0, 4);
    let selectedMonth = currentDate.current.value.substr(5, 6);

    dispatch(
      fetchUserExpense({ pickedMonth: selectedMonth, pickedYear: selectedYear })
    );
    dispatch(
      fetchUserExpenseByCategory({
        pickedMonth: selectedMonth,
        pickedYear: selectedYear,
      })
    );
    setDat(currentDate.current.value);
    dispatch(updateCurrentMonth({ year: selectedYear, month: selectedMonth }));
  };

  return (
    <div className="me-4">
      <Form>
        <Form.Label htmlFor="start">Start month:</Form.Label>
        <InputGroup>
          <Form.Control
            autoComplete="false"
            type="month"
            id="start"
            name="start"
            value={dat}
            onChange={handleDate}
            ref={currentDate}
          />
        </InputGroup>
      </Form>
    </div>
  );
};

export default Month;
