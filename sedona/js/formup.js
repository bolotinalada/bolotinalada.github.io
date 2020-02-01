var search = document.querySelector(".button");
var formbody = document.querySelector(".searching");

search.addEventListener("click", function(event) {
  event.preventDefault();
  formbody.classList.toggle("searching-show");
});