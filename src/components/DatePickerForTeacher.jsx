// DatePickerForTeacher.jsx
import React from "react";
import { Select } from "antd";

const options = [
  {
    label: '11.00-12.00',
    value: '11.00-12.00',
  },
  {
    label: '12.00-13.00',
    value: '12.00-13.00',
  },
  {
    label: '14.00-15.00',
    value: '14.00-15.00',
  },
  {
    label: '16.00-17.00',
    value: '16.00-17.00',
  },
];

function DatePickerForTeacher({ onHourChange }) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    onHourChange(value); // Call the callback function with the selected hour
  };

  return (
    <div>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
        }}
        placeholder="Please select"
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}

export default DatePickerForTeacher;
