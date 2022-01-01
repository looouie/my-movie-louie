const APIKey = "60404752cc43c5a93c65eec86e895189";
const domain = `https://api.themoviedb.org/3/`;
const language = "en-US";

export async function getAllPopular() {
  try {
    const response = await fetch(
      `${domain}movie/popular?api_key=${APIKey}&language=${language}&page=1`
    );

    if (!response.ok) {
      throw new Error("could not fetch all popular");
    }
    const data = await response.json(); // result

    return data;
  } catch (error) {
    return error.message; // self defined message from the Error Object
  }
}

export async function getMovieDetail(movieId) {
  try {
    const response = await fetch(
      `${domain}movie/${movieId}?api_key=${APIKey}&language=${language}`
    );

    if (!response.ok) {
      throw new Error("could not fetch movie detail");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}

export async function searchMovies(keyword) {
  try {
    const response = await fetch(
      `${domain}search/movie?api_key=${APIKey}&query=${keyword}`
    );
    if (!response.ok) {
      throw new Error("could not find related movie");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
}
