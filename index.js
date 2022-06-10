const ul = document.createElement("ul");
const li = document.createElement("li");
const button = document.createElement("button");
button.textContent = "click"
ul.prepend(button, li)
document.body.prepend(ul);

button.addEventListener("click", () => {
  const result = fetch(" https://api.chucknorris.io/jokes/random ")
    .then((response) => response.json())
    .then((data) => (li.textContent = data.value));
});