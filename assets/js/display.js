let movies = []; // No movies initially

const getData = function(){
    const temp = localStorage.getItem('userDataArray');
    if (temp){
        movies = JSON.parse(temp);
    }
    return movies;
}


// Container to display movies
const movieListContainer = document.querySelector(".movie-list");

// Function to display movies
function displayMovies() {
    // Clear existing movies
    movieListContainer.innerHTML = "";
    outputMovies = getData();
    if (outputMovies.length === 0) {
    movieListContainer.innerHTML = `<p>No movies found. Add a movie to get started!</p>`;
    return;
    }

    // Create and append movie elements
    outputMovies.forEach((movie) => {
    const movieItem = document.createElement("li");
    movieItem.classList.add("movie-item");

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "watched";
    checkbox.checked = movie

    let label = document.createElement('label');
    label.htmlFor = "watched";
    label.appendChild(document.createTextNode('Seen it:'));

    movieItem.innerHTML = `
    <img src="${movie.thumbnail}" alt="Movie Poster" class="movie-poster">
    <div class="movie-details">
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-info">
        <span class="rating">${movie.mpaa}</span>
        <span class="year">${movie.year}</span>
        <span class="genre">${movie.genre}</span>
        <span class="duration">${movie.duration}</span>
        </div>
        <p class="actors">${movie.actors}</p>
        <button class="more-details-button">More Details</button>
    </div>
    <div class="personal-details">
        <span class="watched-details">
        </span>
        <span class="inline">
        <p>My Score:</p>
        <span class="movie-score">${movie.pRating}</span>
        </span>
        <textarea class="notes">${movie.notes}</textarea>
    </div>
    `;

    movieListContainer.appendChild(movieItem);
    const watchedDetails = movieItem.querySelector(".watched-details");
    watchedDetails.appendChild(label);
    watchedDetails.appendChild(checkbox);
    });
}

// Initial display (empty state)
displayMovies();