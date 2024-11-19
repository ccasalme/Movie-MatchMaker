document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");
  const movieItems = document.querySelectorAll(".movie-item");

  // Function to filter movies based on search input
  function filterMovies(query) {
    // Convert query to lowercase for case-insensitive matching
    const lowerCaseQuery = query.toLowerCase();

    // Iterate through each movie item
    movieItems.forEach((movieItem) => {
      const title = movieItem.querySelector(".movie-title").textContent.toLowerCase();
      const genre = movieItem.querySelector(".genre").textContent.toLowerCase();

      // Show the movie if the query matches the title or genre
      if (title.includes(lowerCaseQuery) || genre.includes(lowerCaseQuery)) {
        movieItem.style.display = "block";
      } else {
        movieItem.style.display = "none";
      }
    });
  }

  // Attach click event listener to the search button
  searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default form submission behavior (if in a form)

    const query = searchBar.value.trim(); // Get the search query
    if (query) {
      filterMovies(query); // Filter movies based on the query
    }
  });
});
