import { NextApiRequest, NextApiResponse } from 'next'
import { GET_MEDIA_BY_PAGE } from "../../lib/queries/queries";
import {
  IMAGES_PER_PAGE,
  REST_API_IMAGES_PER_PAGE,
} from "../../lib/properties/app-variables";
import { FETCH_ERROR } from "../../lib/properties/error-properties";
import { EXTERNAL_ANILIST_API } from "../../lib/properties/api-urls";
import {ApiData} from '../../interfaces';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST" || req.method === "GET") {
    var variables : {
      page: number;
      perPage: number;
    } ;

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

    const handleResponse = async (response: { json: () => Promise<ApiData>; ok: boolean; }) => {
      return response.json().then(function (json: ApiData) {
        return response.ok ? json : Promise.reject(json);
      });
    }

    const handleData = (response: ApiData) => {
      res.status(200).json(response);
    }

    const handleError = (error: string) => {
      res.status(500).json({ error: FETCH_ERROR });
    }

    // Anilist Api request
    fetch(EXTERNAL_ANILIST_API, options)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);
  }
};

export default handler;
