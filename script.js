const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities =[];

fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data))

function findMatches(wordTomatch, cities){
    return cities.filter(place =>{
        let regex = new RegExp(wordTomatch, "gi");

        return place.city.match(regex) || place.state.match(regex);
    });
}

function displayNames(){
    // console.log(this.value);
    const matchedArr = findMatches(this.value, cities);
    const html = matchedArr.map(place =>{
        let regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
        return `
        <li>
          <span class='name'>${cityName}, ${stateName}</span>
          <span class='population'>${place.population}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
    console.log(matchedArr);
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener('change', displayNames);
searchInput.addEventListener('keyup', displayNames);
