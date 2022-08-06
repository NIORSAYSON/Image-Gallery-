var fullImageBox = document.getElementById("full-imagebox")
var fullImage = document.getElementById("full-image")

function openFullImage(pic) {
  fullImageBox.style.display = "flex"
  fullImage.src = pic
}

function closeFullImage() {
  fullImageBox.style.display = "none"
}