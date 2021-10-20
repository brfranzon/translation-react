import { Box } from "@material-ui/core";
import "./App.css";
import Navbar from "./navbar/navbar";
import Profile from "./profile/profile";

function App() {
  return (
    <Box
      minWidth="100%"
      display="flex"
      flexDirection="column"
      justifyContent= 'space-between'
      minHeight = '400px'
    >
      <Navbar />
      <Profile />
    </Box>
  );
}

export default App;
