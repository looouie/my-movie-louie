const APIKey = "60404752cc43c5a93c65eec86e895189";
const domain = `https://api.themoviedb.org/3/`;
const language = "en-US";

export async function getAllPopular() {
  const response = await fetch(
    `${domain}movie/popular?api_key=${APIKey}&language=${language}&page=1`
  );
  const data = await response.json(); // result

  if (!response.ok) {
    throw new Error(data.message || "could not fetch all popular movies");
  }
  return data;
}

export async function getMovieDetail(movieId) {
  const response = await fetch(
    `${domain}movie/${movieId}?api_key=${APIKey}&language=${language}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "could not fetch movie detail");
  }

  return data;
}

export async function searchByKeyword(keyword) {
  const response = await fetch(
    `${domain}search/keyword?api_key=${APIKey}&query=${keyword}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "could not find related movie");
  }

  return data;
}
