const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const forMob = document.querySelector(".mobile-active");
const mobList = document.querySelector(".mobile-list");
menu.addEventListener("click", function () {
  forMob.classList.remove("hidden");
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  forMob.classList.add("hidden");
  menu.style.display = "block";
  close.style.display = "none";
});

mobList.addEventListener("click", function () {
  forMob.classList.add("hidden");
  menu.style.display = "block";
  close.style.display = "none";
});
