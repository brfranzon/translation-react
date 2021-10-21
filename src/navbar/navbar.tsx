import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useContext } from "react";
import LanguageContext from "../context/language-ctx";

const Navbar = () => {
  
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <Box maxWidth="120" style={{ padding: 60, backgroundColor: "yellow" }}>
      <FormControl fullWidth style = {{width: 300}}>
        <InputLabel>Language - {language}</InputLabel>
        <Select
          // value={localStorage.getItem("lang") || "en"}
          value={language || "en"}
          onChange={e => setLanguage(e.target.value)}
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
