// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Search bar and filter button
    const searchBar = document.querySelector(".search-bar");
    const filterButton = document.querySelector(".filter-button");
  
    // Movie list (starts empty)
    const movies = []; // No movies initially
  
    // Container to display movies
    const movieListContainer = document.querySelector(".movie-container");
  
    // Function to display movies
    function displayMovies(filteredMovies) {
      // Clear existing movies
      movieListContainer.innerHTML = "";
  
      if (filteredMovies.length === 0) {
        movieListContainer.innerHTML = `<p>No movies found. Add a movie to get started!</p>`;
        return;
      }
  
      // Create and append movie elements
      filteredMovies.forEach((movie) => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");
  
        movieItem.innerHTML = `
          <h3>${movie.title}</h3>
          <p>Genre: ${movie.genre}</p>
          <p>Actors: ${movie.actors}</p>
          <p>Year: ${movie.year}</p>
          <p>Rating: ${"⭐".repeat(movie.rating)}</p>
        `;
  
        movieListContainer.appendChild(movieItem);
      });
    }
  
    // Initial display (empty state)
    displayMovies(movies);
  
    // Search functionality
    searchBar.addEventListener("input", (event) => {
      const query = event.target.value.toLowerCase();
  
      const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query)
      );
  
      displayMovies(filteredMovies);
    });
  
    // Filter functionality (example: Genre filter)
    filterButton.addEventListener("click", () => {
      if (movies.length === 0) {
        alert("No movies to filter. Add some movies first!");
        return;
      }
  
      const genre = prompt("Enter genre to filter (e.g., Action, Drama, etc.):");
  
      if (genre) {
        const filteredMovies = movies.filter(
          (movie) => movie.genre.toLowerCase() === genre.toLowerCase()
        );
  
        displayMovies(filteredMovies);
      }
    });
  
    // Adding new movies dynamically
    const addMovieButton = document.querySelector(".add-movie-button");
    addMovieButton.addEventListener("click", () => {
      const title = prompt("Enter movie title:");
      const genre = prompt("Enter movie genre:");
      const actors = prompt("Enter main actors:");
      const year = prompt("Enter release year:");
      const rating = parseInt(prompt("Enter rating (1-5):"), 10);
  
      if (title && genre && actors && year && rating) {
        movies.push({ title, genre, actors, year, rating });
        displayMovies(movies);
      } else {
        alert("Please fill in all the details to add a movie.");
      }
    });
  });
  