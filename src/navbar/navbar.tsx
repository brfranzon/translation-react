import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useState } from "react";

const Navbar = () => {

  const handleChange = (event: any) => {
    localStorage.setItem("lang", event.target.value);
    window.location.reload();
  };

  return (
    <Box
      sx={{ maxWidth: 120 }}
      style={{ padding: 60, backgroundColor: "yellow" }}
    >
      <FormControl fullWidth>
        <InputLabel>Language</InputLabel>
        <Select
          labelId="ang"
          value={localStorage.getItem('lang') || 'en'}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value="de">German</MenuItem>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="sp">Spanisch</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Navbar;
