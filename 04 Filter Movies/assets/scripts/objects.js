const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filterTerm = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length == 0) {
    movieList.classList.remove("visible"); // no list items - so hide element
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = ""; // not recommended but for learning purposes

  const filteredMovies = filterTerm
    ? movies.filter((movie) => movie.info.title.includes(filterTerm))
    : movies;

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    const { info, ...otherProperties } = movie; // object destructuring

    let { getFormattedTitle } = movie;
    getFormattedTitle = getFormattedTitle.bind(movie);

    let movieText = getFormattedTitle() + " - ";
    for (key in info) {
      if (key !== "title") {
        movieText += `${key}: ${info[key]}`;
      }
    }
    movieElement.textContent = movieText;
    movieList.append(movieElement);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value.trim();
  const extraName = document.getElementById("extra-name").value.trim();
  const extraValue = document.getElementById("extra-value").value.trim();

  if (title == "" || extraName == "" || extraValue == "") {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  console.log(movies);
  renderMovies();
};

const filterMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value.trim();
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", filterMovieHandler);
