import { GET_MEDIA_BY_PAGE } from "../../lib/queries/queries";
import {
  IMAGES_PER_PAGE,
  REST_API_IMAGES_PER_PAGE,
} from "../../lib/properties/app-variables";
import { FETCH_ERROR } from "../../lib/properties/error-properties";
import { EXTERNAL_ANILIST_API } from "../../lib/properties/api-urls";

const handler = (req, res) => {
  if (req.method === "POST" || req.method === "GET") {
    var variables;

    if (req.method === "POST") {
      variables = {
        page: req.body && req.body.pageId ? +req.body.pageId : 1,
        perPage: IMAGES_PER_PAGE,
      };
    } else if (req.method === "GET") {
      variables = {
        page: 1,
        perPage: REST_API_IMAGES_PER_PAGE,
      };
    }

    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: GET_MEDIA_BY_PAGE, variables })
    };

    // Anilist Api request
    fetch(EXTERNAL_ANILIST_API, options)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);

    function handleResponse(response) {
      return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    function handleData(response) {
      res.status(200).json(response);
    }

    function handleError(error) {
      res.status(500).json({ error: FETCH_ERROR });
    }
  }
};

export default handler;
