import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const _DatePicker = ({ newValue }) => {
  const [time, setTime] = React.useState("");

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Saat aralığı seçiniz
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={time}
          label="Saat aralığı seçiniz"
          onChange={handleChange}
        >
          <MenuItem value={10}>10-11</MenuItem>
          <MenuItem value={20}>12.13</MenuItem>
          <MenuItem value={30}>14-15</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default _DatePicker;