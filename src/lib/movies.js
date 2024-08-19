export default async function retrieveMovies(setMovies, accessToken) {
  const response = await fetch("http://localhost:3000/movies", {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  const moviesFromServer = await response.json();
  // we verify if the response is ok and then set the movies
  if (response.ok) {
    setMovies(moviesFromServer);
  }

  // if (response.status == 401) {
  //   navigate("/");
  // }
}
