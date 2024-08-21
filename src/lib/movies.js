// movies.js
export default async function retrieveMovies(setMovies, accessToken) {
  console.trace("retrieveMovies called with accessToken:", accessToken);

  if (!accessToken) {
    console.error("Access token is missing");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/movies", {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const moviesFromServer = await response.json();
      setMovies(moviesFromServer);
    }
  } catch (error) {
    console.error("Error retrieving movies:", error);
  }
}
