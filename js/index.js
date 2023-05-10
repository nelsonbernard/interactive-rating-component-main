const listItems = document.getElementsByClassName("rating");
const survey = document.querySelector(".container-survey");
const thanks = document.querySelector(".container-thanks");
const result = document.querySelector(".result");

function clickRating(id) {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("active");
  }

  id.classList.add("active");
}

function submitRating() {
  let selectedRating = document.getElementsByClassName("rating active");

  let ratingValue = selectedRating[0].innerText;

  result.innerText = "You selected " + ratingValue + " out of 5";
  survey.style.display = "none";
  thanks.style.display = "flex";
}
