import { getAllPopular, getMovieDetail, searchMovies } from "../api";

beforeEach(() => {
  fetch.resetMocks();
});

test("fetch getAllPopular - successfully", async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: 12345 }));
  const response = await getAllPopular();
  expect(response).toEqual({ data: 12345 });
  expect(fetch).toHaveBeenCalledTimes(1);
});

test("fetch getAllPopular - fail", async () => {
  fetch.mockResponseOnce("something", {
    status: 500,
    headers: { "content-type": "application/json" },
  });
  const response = await getAllPopular();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(response).toEqual("could not fetch all popular");
});

test("fetch getMovieDetail - successfully", async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: 12345 }));
  const response = await getMovieDetail(11111);
  expect(response).toEqual({ data: 12345 });
  expect(fetch).toHaveBeenCalledTimes(1);
});

test("fetch getMovieDetail - fail", async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: 12345 }));
  const response = await getMovieDetail(11111);
  expect(response).toEqual({ data: 12345 });
  expect(fetch).toHaveBeenCalledTimes(1);
});

test("fetch searchMovies - successfully", async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: 12345 }));
  const response = await searchMovies("Spider");
  expect(response).toEqual({ data: 12345 });
  expect(fetch).toHaveBeenCalledTimes(1);
});

test("fetch searchMovies - fail", async () => {
  fetch.mockResponseOnce("something", {
    status: 500,
    headers: { "content-type": "application/json" },
  });
  const response = await searchMovies("Spider");
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(response).toEqual("could not find related movie");
});
