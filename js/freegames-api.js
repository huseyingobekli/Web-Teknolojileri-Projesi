const API_KEY = "8bbc971914msh660fd60ad641200p1123edjsndd1ad60440cc";

async function getImages() {
  let response = await fetch("https://free-epic-games.p.rapidapi.com/free", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${API_KEY}`,
      "X-RapidAPI-Host": "free-epic-games.p.rapidapi.com",
    },
  });

  let data = await response.json();
  const freeGamesWrapper = document.querySelector(".freegames-wrapper");

  data.freeGames.current.map((item, idx) => {
    freeGamesWrapper.innerHTML += `
      <div class="about-hobby-api">
      <div class="about-hobby-api-text">
        <h2 class="about-hobby-api-text-tittle">${data.freeGames.current[idx].title}</h2>
        <p class="about-text-paragraf">
        ${data.freeGames.current[idx].description}
        </p>
        <div class="about-hobby-api-details">
          <div>
            <strong>Viewable Date :</strong
            ><time class="about-hobby-api-details-time">${data.freeGames.current[idx].viewableDate}</time>
          </div>
          <div>
            <strong>Source :</strong>
            <a href="https://apod.nasa.gov/apod/astropix.html"
              >Epic Games</a
            >
          </div>
          <div>
            <strong>Api : </strong>
            <a
              href="https://rapidapi.com
          "
            >
              <span style="font-style: italic">https://rapidapi.com</span>
            </a>
          </div>
        </div>
      </div>
      <div class="about-hobby-api-img">
      <img src="${data.freeGames.current[idx].keyImages[0].url}" alt="" />
      </div>
    </div>
          `;
  });
}
getImages();
