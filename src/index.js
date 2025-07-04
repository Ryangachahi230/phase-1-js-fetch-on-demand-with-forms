const init = () => {
  
}

document.addEventListener('DOMContentLoaded', init);
const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
fetch(`http://localhost:3000/movies/${input.value}`)
  .then((response) => {
    if (!response.ok) throw new Error("Invalid ID");
    return response.json();
  })
  .then((data) => {
    const title = document.querySelector("section#movieDetails h4");
    const summary = document.querySelector("section#movieDetails p");
    title.innerText = data.title;
    summary.innerText = data.summary;
  })
  .catch((error) => {
    console.error(error);
    const title = document.querySelector("section#movieDetails h4");
    const summary = document.querySelector("section#movieDetails p");
    title.innerText = "Error";
    summary.innerText = "Movie not found. Please enter a valid ID.";
  });
  
