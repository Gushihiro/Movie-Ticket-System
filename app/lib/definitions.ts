export type Movie = {
  adult: boolean,
  backdrop_path: string,
  genres: [{id: number, name: string}],
  homepage: string,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: [{id: number, logo_path: string | null, name: string, origin_country: string}],
  release_date: string,
  runtime: number,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}