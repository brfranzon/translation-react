import { Box } from "@material-ui/core";
import "./App.css";
import Navbar from "./navbar/navbar";
import Profile from "./profile/profile";

import './i18n'; 
import i18next from 'i18next';
import LanguageContext from "./context/language-ctx";
import { useContext } from "react";

// With Local storage
//const lang = localStorage.getItem('lang') || 'en';
//i18next.changeLanguage(lang);

function App() {
  
  const {language} = useContext(LanguageContext); 
  i18next.changeLanguage(language);

  console.log('render app'); 

  return (
    <Box
      pt="60px"
      minWidth="100%"
      minHeight="400px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Navbar />
      <Profile />
    </Box>
  );
}

export default App;
