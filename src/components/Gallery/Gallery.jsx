import { api_key } from "./env.js";

export const Gallery = () => {
  const api_url =
    "https://api.pexels.com/v1/search?query=nature&per_page=15&size=small";
  const image_grid = document.getElementById("image_grid");

  fetch(api_url, {
    headers: {
      Authorization: api_key,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.photos.forEach((photo) => {
        const figure_element = document.createElement("figure");

        const img_element = document.createElement("img");
        img_element.src = photo.src.original;
        img_element.alt = photo.photographer;
        img_element.classList.add("loaded");

        const figcaption_element = document.createElement("figcaption");
        figcaption_element.textContent = `${photo.photographer}`;

        figure_element.appendChild(img_element);
        figure_element.appendChild(figcaption_element);

        image_grid.appendChild(figure_element);
      });
    })
    .catch((error) => console.error(error));
};
