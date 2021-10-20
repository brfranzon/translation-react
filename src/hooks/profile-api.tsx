import axios from "axios";
import { useState } from "react";

const useApiCall = () => {
  const getUser = async (name: string) => {
    try {
      let response = await fetch(`https://api.github.com/users/${name}`);
      return await response.json();
    } catch (err) {
      console.log("Error while fetching the data: ", err);
      throw err;
    }
  };

  return { getUser };
};

export default useApiCall;
