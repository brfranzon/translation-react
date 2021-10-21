import { Box, Typography } from "@material-ui/core";
import i18next from "i18next";

const Profile = () => {

  console.log('render profile'); 


  return <Box>
      <Typography variant="h2">{i18next.t("word1")}</Typography>
      <Typography variant="h2">{i18next.t("word2")}</Typography>
      <Typography variant="h2">{i18next.t("word3")}</Typography>
    </Box>
  };

export default Profile;
