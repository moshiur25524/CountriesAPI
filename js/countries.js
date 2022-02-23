const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
         <h3>${country.name}</h3>
         <p>${country.capital}</p>
         <button onclick ="loadCountryByName('${country.name}')">Details</button>
        `
        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);

        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p)
        countriesDiv.appendChild(div)
    })
}
const loadCountryByName = name => {
    const url = `https://restcountries.eu/v2/name/${name}`;
   console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data[0]))
}

displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail')
}   