import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import useApiCall from "../hooks/profile-api";
import i18next from "i18next";

const Profile = () => {
  const { getUser } = useApiCall();

  const [userProfile, setUserProfile] = useState<any>();
  useEffect(() => {
    getUser("brfranzon")
      .then((res) => {
        setUserProfile(res);
      })
      .catch((err) => {});
  }, []);

  return (
    <Box>
      {/* <Typography>{userProfile?.message}</Typography>
      <Typography>{userProfile?.login}</Typography> */}
       <Typography>{i18next.t('word1')}</Typography>
    </Box>
  );
};

export default Profile;
