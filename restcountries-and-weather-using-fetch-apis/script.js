let countries = [];

getWeatherDetails = async (event) => {
    const latlong = countries[event.srcElement.id];
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${latlong.capital}&appid=562f8f05874653bcf59e84a4731adfd7`);
    const data = await response.json();
    alert(`Description: ${data.weather[0].description}, Temperature: ${data.main.temp}, Temperature max: ${data.main.temp_max}, Temperature min: ${data.main.temp_min}`)
}

fetchCountriesApi = async () => {
    let response = await fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
    countries = await response.json();
    listTheCountriesCard();
    countries.forEach((e,i) => {
        document.getElementById(`${i}`).addEventListener('click', getWeatherDetails);
    });
}

window.addEventListener("load", fetchCountriesApi);

getLabelValue = (labelName, value, i) => {
    let labelValueContainer = document.createElement('div');
    labelValueContainer.classList.add('label-value-container','text-center');


    let label = document.createElement('span');
    let labelText = document.createTextNode(`${labelName} :`);
    label.appendChild(labelText);
    labelValueContainer.appendChild(label);

    let labelValue = document.createElement('span');
    let labelValueText = document.createTextNode(` ${value}`);
    labelValue.appendChild(labelValueText);
    labelValueContainer.appendChild(labelValue);

    return labelValueContainer;
}

listTheCountriesCard = () => {
    let bodyTag = document.body;
    let container = document.createElement('div');
    container.classList.add('container');

    let row = document.createElement('div');
    row.classList.add('row');

    countries.forEach((country, i) => {
        let column = document.createElement('div');
        column.classList.add('col-sm-12','col-lg-4');
        
        let card = document.createElement('div');
        card.classList.add('card');

        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header','text-center');

        let cardHeaderText = document.createTextNode(country.name);
        cardHeader.appendChild(cardHeaderText);
        card.appendChild(cardHeader);

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let countryFlag = document.createElement('img');
        countryFlag.src = country.flag;
        countryFlag.classList.add('img-fluid','mb-2','flag-img');
        cardBody.appendChild(countryFlag);

        cardBody.appendChild(getLabelValue('Capital', country.capital), i);
        cardBody.appendChild(getLabelValue('Region', country.region), i);
        cardBody.appendChild(getLabelValue('Country code', country.currencies[0].code), i);
        cardBody.appendChild(getLabelValue('Latlng', JSON.stringify(country.latlng), i));

        let clickForWeatherBtn = document.createElement('button');
        clickForWeatherBtn.classList.add('btn','btn-primary','mx-auto','d-block','mt-2');
        clickForWeatherBtn.setAttribute('id', `${i}`);
        let labelValueText = document.createTextNode('Click for weather');
        clickForWeatherBtn.appendChild(labelValueText);
        cardBody.appendChild(clickForWeatherBtn);
        
        card.appendChild(cardBody);
        column.appendChild(card);
        row.appendChild(column);
    });
    
    container.appendChild(row);
    bodyTag.appendChild(container);
}