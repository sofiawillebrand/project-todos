import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";

import "react-datepicker/dist/react-datepicker.css";

const Wrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
    font-family: "rubik";
  }
  .react-datepicker__input-container input {
    font-family: "rubik";
  }
`;

const AddDate = ({ setNewDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Wrapper>
      <label>
        Deadline
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setNewDate(date);
          }}
        />
      </label>
    </Wrapper>
  );
};

export default AddDate;
