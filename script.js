document.addEventListener("DOMContentLoaded", function() {
  const movieForm = document.getElementById("movieForm");
  const movieInput = document.getElementById("movieInput");
  const movieList = document.getElementById("movieList");

  // Load existing movies from localStorage
  const movies = JSON.parse(localStorage.getItem("movies")) || [];

  // Function to update movie list and localStorage
  function updateMovies() {
    movieList.innerHTML = "";
    movies.forEach((movie, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = movie;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function() {
        movies.splice(index, 1);
        updateMovies();
      });

      listItem.appendChild(removeButton);
      movieList.appendChild(listItem);
    });

    // Update localStorage
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  // Initialize movie list
  updateMovies();

  // Add a new movie
  movieForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const movieName = movieInput.value.trim();
    if (movieName && !movies.includes(movieName)) {
      movies.push(movieName);
      updateMovies();
    }
    movieInput.value = "";
  });
});
