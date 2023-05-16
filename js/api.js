async function showData() {
  let response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=mJkN2FrHOPUiiTwlkTwFGVVSBcHuYhwC30gkPG1D",
    {
      method: "GET",
      url: "https://api.nasa.gov/planetary/apod?api_key=mJkN2FrHOPUiiTwlkTwFGVVSBcHuYhwC30gkPG1D",
    }
  );
  var data = await response.json();

  const tittle = document.querySelector(".about-hobby-api-text-tittle");
  const paragraf = document.querySelector(
    ".about-hobby-api-text .about-text-paragraf"
  );
  const image = document.querySelector(".about-hobby-api-img");
  const time = document.querySelector(".about-hobby-api-details-time");
  const copyright = document.querySelector(".about-hobby-api-copyright");

  tittle.innerHTML = `
  ${data.title}
  `;
  paragraf.innerHTML = `
  ${data.explanation}
  `;
  image.innerHTML = `
  <img src="${data.url}" alt="" />
  `;
  time.innerHTML = `
  ${data.date}
  `;
  copyright.innerHTML = `
  ${data.copyright}
  `;
}

showData();
