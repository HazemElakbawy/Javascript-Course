const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelButton = addMovieModal.querySelector(".btn--passive");
const addButton = cancelButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");

const movies = [];
const MoviesList = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");

const updateEntryText = () => {
  if (movies.length) {
    entryText.style.display = "none";
  } else {
    entryText.style.display = "block";
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (let i = 0; i < movies.length; i++) {
    if (movieId === movies[i].id) {
      movieIndex = i;
      break;
    }
  }
  movies.splice(movieIndex, 1);
  MoviesList.children[movieIndex].remove();
  closeMovieDeletionModal();
};

const startDeleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal);
  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovie.bind(null, movieId)
  );
};

const renderNewMovie = (movieObj) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${movieObj.image}" alt ="${movieObj.title}">
  </div>
  <div class = "movie-element__info">
  <h2>${movieObj.title}</h2>
  <p>${movieObj.rating} / 5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, movieObj.id)
  );
  MoviesList.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const backdropHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearUserInput();
};

const clearUserInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const cancelButtonHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearUserInput();
};

const addButtonHandler = () => {
  const movieTitle = userInputs[0].value.trim();
  const imageURL = userInputs[1].value.trim();
  const rating = userInputs[2].value.trim();

  if (movieTitle && imageURL && rating && +rating >= 1 && +rating <= 5) {
    const newMovie = {
      id: Math.random().toString(),
      title: movieTitle,
      image: imageURL,
      rating: rating,
    };

    movies.push(newMovie);
    console.log(movies);
    closeMovieModal();
    toggleBackdrop();
    updateEntryText();
    clearUserInput();
    renderNewMovie(newMovie);
  } else {
    alert("Please enter valid values , rating (1 upto 5)");
  }
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropHandler);
cancelButton.addEventListener("click", cancelButtonHandler);
addButton.addEventListener("click", addButtonHandler);
