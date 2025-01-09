let searchBox = document.querySelector("#search-box");
let images = document.querySelectorAll(".container .container-image .image");
let noResultsMessage = document.querySelector("#no-results");

searchBox.oninput = () => {
  let value = searchBox.value.toLowerCase();
  let hasResults = false; //

  images.forEach((filter) => {
    let title = filter.getAttribute("data-title").toLowerCase();

    if (title.includes(value)) {
      filter.style.display = "block";
      hasResults = true;
    } else {
      filter.style.display = "none";
    }
  });

  if (value === "") {
    images.forEach((filter) => {
      filter.style.display = "block";
    });
    noResultsMessage.style.display = "none";
  }

  if (hasResults) {
    noResultsMessage.style.display = "none";
  } else {
    noResultsMessage.style.display = "block";
  }
};
