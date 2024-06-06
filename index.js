const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector(".input");

let users = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible = user.name.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

fetch("something.json")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content
        .cloneNode(true)
        .querySelector(".card");
      const content = card.querySelector(".content");

      content.textContent = user.name;
      card.querySelector("a").href = user.url;

      // Apply colors for glow effect
      const [color1, color2] = user.colors;
      card.style.setProperty("--color1", color1);
      card.style.setProperty("--color2", color2);

      userCardContainer.append(card);

      return { name: user.name, url: user.url, element: card };
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));

  
  const toggleButton = document.querySelector('.toggle-menu');
  const navBar = document.querySelector('.nav-bar');
  toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('toggle');
  });
  