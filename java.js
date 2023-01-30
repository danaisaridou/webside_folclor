var slideIndex = 1;
var slides = document.getElementsByClassName("slides");
var thumbnails = document.getElementsByClassName("thumbnail");
var playButton = document.getElementById("play");
var stopButton = document.getElementById("stop");
var slideInterval;
showSlides();

function showSlides() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
  slideInterval = setTimeout(showSlides, 3000);
}

function prevSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
}

function nextSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
}

function currentSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex = index;
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
}

function playSlide() {
  slideInterval = setTimeout(showSlides, 4000);
  playButton.style.display = "none";
  stopButton.style.display = "block";
}

function stopSlide() {
  clearTimeout(slideInterval);
  stopButton.style.display = "none";
  playButton.style.display = "block";
}

// Set default style of images to "none"
for (var i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}

// Show the first image
slides[0].style.display = "block";
thumbnails[0].className += " active";

playButton.style.display = "none";
