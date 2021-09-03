import { ENV_VAR } from "../properties/environment-variables";
import { INTERNAL_ANILIST_API } from "../properties/api-urls";

//POST method call to the internal API
export const internalPostRequest = async (req) => {
  const response = await fetch(`${ENV_VAR}${INTERNAL_ANILIST_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  const data = await response.json();
  return data;
};

//GET method call to the internal API
export const internalGetRequest = async () => {
  const response = await fetch(`${ENV_VAR}${INTERNAL_ANILIST_API}`, {
    method: "GET"
  });
  const data = await response.json();
  return data;
};

