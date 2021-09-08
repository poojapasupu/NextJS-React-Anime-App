import { INTERNAL_ANILIST_API } from "../properties/api-urls";
import { ApiData } from "../../interfaces";

type Request = {
  pageId: number;
};

//POST method call to the internal API
export const internalPostRequest = async (req: Request): Promise<ApiData> => {
  const response = await fetch(`${process.env.ENV_VAR}${INTERNAL_ANILIST_API}`, {
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
export const internalGetRequest = async () : Promise<ApiData> => {
  const response = await fetch(`${process.env.ENV_VAR}${INTERNAL_ANILIST_API}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};
