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

// CONTACT FORM //

function validateForm() {
  testName();
  testEmail();
  verifyEmail();
  phone();
  /*   testMessage(); */
}

function testName() {
  let fullname = document.getElementById("name").value;

  if (fullname == "") {
    document.getElementById("nameError").innerHTML = "Please write your name";
  } else {
    document.getElementById(
      "nameError"
    ).innerHTML = `<i class="fa-solid fa-check"></i>`;
  }
}

function testEmail() {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let email = document.getElementById("email").value;
  if (emailRegex.test(email)) {
    document.getElementById(
      "emailError"
    ).innerHTML = `<i class="fa-solid fa-check"></i>`;
  } else {
    document.getElementById("emailError").innerHTML = "Please write your email";
  }
}

function verifyEmail() {
  let verifyemail = document.getElementById("verifyemail").value;
  let email = document.getElementById("email").value;
  if (verifyemail != "") {
    if (verifyemail == email) {
      document.getElementById(
        "verifyError"
      ).innerHTML = `<i class="fa-solid fa-check"></i>`;
    } else {
      document.getElementById("verifyError").innerHTML =
        "Please write the same email";
    }
  } else {
    document.getElementById("verifyError").innerHTML =
      "Please write the same email";
  }
}

function phone() {
  let PhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let phone = document.getElementById("phone").value;
  if (PhoneRegex.test(phone)) {
    document.getElementById(
      "phoneError"
    ).innerHTML = `<i class="fa-solid fa-check"></i>`;
  } else {
    document.getElementById("phoneError").innerHTML =
      "Please write your phone number";
  }
}
