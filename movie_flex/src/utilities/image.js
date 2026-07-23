const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getBackdropUrl = (path) =>
  `${IMAGE_BASE_URL}/original${path}`;

export const getPosterUrl = (path) =>
  `${IMAGE_BASE_URL}/w500${path}`;