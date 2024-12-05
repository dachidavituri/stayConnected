export interface RatingsResponse {
  username: string;
  rating: number;
}

export interface RatingsResponseAll {
  count: number;
  next: string | null;
  previous: string | null;
  results: RatingResponse[];
}

export interface RatingResponse {
  username: string;
  rating: number;
}
