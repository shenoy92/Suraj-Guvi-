//Get all the countries from Asia continent using Filter function
  fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
    return response.json()
  }).then((data)=>{
    console.log(data.filter((item)=>item.region==='Asia'))
  })

  //Get all the countries with population of less than 2 lacs using Filter function
  fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
    return response.json()
  }).then((data)=>{
    console.log(data.filter((item)=>item.population<200000))
  })


  //Print the following details name, capital, flag using forEach function
  fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
    return response.json()
  }).then((data)=>{
    return data.forEach((item)=>console.log(item.name,item.capital,item.flag))
  })


  //Print the total population of countries using reduce function
  fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
    return response.json()
  }).then((value)=>{
    console.log(value.reduce((accumulator,element)=>{
    return accumulator + element.population;
  },0))})


  //Print the total population of countries in Asia continent using reduce and filter function
  fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
    return response.json()
  }).then((data)=>{
    return data.filter((item)=>item.region==='Asia')
  }).then((value)=>{
    console.log(value.reduce((accumulator,element)=>{
    return accumulator + element.population;
  },0))})

  
  //Print the country which use US Dollars as currency.
  fetch(`https://restcountries.eu/rest/v2/all`).then((response) => {
    return response.json()
  }).then((data)=>{
    console.log(data.filter((item)=>item.currencies[0].code==='USD'))
  })
  





  
  