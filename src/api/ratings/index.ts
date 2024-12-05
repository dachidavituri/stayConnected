import { httpClient } from "..";
import { RATING_ENDPOINTS } from "./index.enum";
import { RatingsResponseAll } from "./index.types";

export const getRatings = async () => {
  return await httpClient
    .get<RatingsResponseAll>(RATING_ENDPOINTS.RATINGS, {
      headers: { "ngrok-skip-browser-warning": "true" },
    })
    .then((res) => res.data);
};
