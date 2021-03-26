var englishElements = document.querySelectorAll(".english");
var hindiElements = document.querySelectorAll(".hindi");

document.querySelector(".india-button").addEventListener("click", function(e) {
  toggleInvisible(hindiElements);
});

document.querySelector(".uk-button").addEventListener("click", function(e) {
  toggleInvisible(englishElements);
});

function toggleInvisible(arr) {
  for(var i = 0; i < arr.length; i++) {
      arr[i].classList.toggle("invisible");
      if(arr[i].classList.contains("english")) {
        hindiElements[i].classList.toggle("invisible");
      } else if (arr[i].classList.contains("hindi")) {
        englishElements[i].classList.toggle("invisible");
      }
  }
}
