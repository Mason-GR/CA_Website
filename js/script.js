const navButton = document.querySelector(".navButton");
const navigation = document.querySelector(".navigation");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("active");
  navigation.classList.toggle("active");
});
 