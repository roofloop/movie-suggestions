document.addEventListener("DOMContentLoaded", function() {
  const movieForm = document.getElementById("movieForm");
  const movieInput = document.getElementById("movieInput");
  const movieList = document.getElementById("movieList");

  movieForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const movieName = movieInput.value;
    if (movieName) {
      const listItem = document.createElement("li");
      listItem.textContent = movieName;
      movieList.appendChild(listItem);
    }
  });
});
