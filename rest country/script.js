function callWeatherReport(element){
  let city = element.parentElement.firstElementChild.innerText.substring(10)
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0681297bf49f1c0c27fb3b3fe7286117`).then((response) => {
    return response.json();
  }).then((data) => {
    alert(`Description: ${data.weather[0].description}, Temperature: ${data.main.temp}, Temperature max: ${data.main.temp_max}, Temperature min: ${data.main.temp_min}`);

  }).catch((error) => {
    console.log(error);
  })
}

let restCountries = fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    let container = document.createElement("div");
    container.setAttribute("class", "container");
    let node,
      cardHeader,
      img,
      cardBody,
      capital,
      region,
      countryCode,
      Latlng,
      button = {};

    data.forEach((element) => {
      node = document.createElement("div");
      node.classList.add("card", "text-center", "float-start");
      node.setAttribute("style", "width: 18rem; margin: 1vw; height: 26rem;font-weight: 700;");

      cardHeader = document.createElement("div");
      cardHeader.setAttribute("class", "card-header");
      cardHeader.innerText = element.name;
      node.appendChild(cardHeader);

      img = document.createElement("img");
      img.setAttribute("class", "card-img-top");
      img.setAttribute("style","height: 10rem;")
      img.setAttribute("src", element.flag);
      node.appendChild(img);
    
      cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "text-center");

      capital = document.createElement("p");
      capital.innerText = `Capital : ` + element.capital;

      region = document.createElement("p");
      region.innerText = `Region : ` + element.region;

      countryCode = document.createElement("p");
      countryCode.innerText = `Country code : ` + element.alpha3Code;

      Latlng = document.createElement("p");
      Latlng.innerText = `Latlng : ` + JSON.stringify(element.latlng);

      cardBody.appendChild(capital);
      cardBody.appendChild(region);
      cardBody.appendChild(countryCode);
      cardBody.appendChild(Latlng);

      button = document.createElement("a");
      button.setAttribute("href", "#");
      button.setAttribute("onclick", "callWeatherReport(this)");
      button.classList.add("btn", "btn-primary");
      button.innerText = `Click for weather`;
      cardBody.appendChild(button);

      node.appendChild(cardBody);

      container.appendChild(node);
    });

    document.body.append(container);
  })
  .catch((error) => {
    console.log(error);
  });