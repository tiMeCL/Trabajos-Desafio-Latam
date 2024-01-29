document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  let newColor;
  switch (key) {
    case "a":
      newColor = "pink";
      break;
    case "s":
      newColor = "orange";
      break;
    case "d":
      newColor = "skyblue";
      break;
    default:
      return;
  }

  const keyDiv = document.getElementById("key");
  keyDiv.style.backgroundColor = newColor;
});
 
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  let newColor;
  switch (key) {
    case "q":
      newColor = "purple";
      break;
    case "w":
      newColor = "grey";
      break;
    case "e":
      newColor = "brown";
      break;
    default:
      return;
  }

  const keyDiv = document.getElementById("key2");
  keyDiv.style.backgroundColor = newColor;
});

const divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function (event) {
    event.target.style.backgroundColor = "black";
  });
}
