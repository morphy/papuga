import axios from "axios";

import { getEnv } from "@pck/utils";

import { UserEntry } from "./types";

const tokenUrl = getEnv("ISSUER_BASE_URL") + "/protocol/openid-connect/token";
const usersUrl = getEnv("ISSUER_USERS_URL");

const client_id = getEnv("CLIENT_ID");
const client_secret = getEnv("CLIENT_SECRET");

const getUserEntriesFromIDP = async () => {
  const tokenRequestData = {
    grant_type: "client_credentials",
    client_id: client_id,
    client_secret: client_secret
  };

  const tokenResponse = await axios.post(tokenUrl, tokenRequestData, {
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  });

  const token = tokenResponse.data?.access_token;

  const userEntriesResponse = await axios.get<UserEntry[]>(usersUrl, {
    headers: {
      authorization: "Bearer " + token
    }
  });

  return userEntriesResponse.data;
};

export default getUserEntriesFromIDP;
