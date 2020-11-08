function filterByRestaurantName(){
    const filterText = document.getElementsByClassName('textinput');

    
}

function filterByCategory(){
    const filterText = document.getElementsByClassName('textinput');
}

document.body.addEventListener('input', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray();
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
      .catch((err) => {
        console.log(err);
      });
  });

const endpoint = "https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json";
const stuff = [];

fetch (endpoint)
.then(blob => blob.json())
.then(data => stuff.push(...data))

function findMatches(wordtoMatch, stuff)
{ return stuff.filter(resta =>{
    const regex = new RegExp(wordtoMatch, 'gi');
    return resta.category.match(regex) || resta.name.match(regex)
});

}
function displayMatches() {
    const matchArray = findMatches(this.value, stuff);
    const html = matchArray.map(resta => {
        return `
        <li>
            <span class = "name">${resta.category}, ${resta.name}</span>
            <span class ="address">${resta.city}, ${resta.state},${resta.zip},${resta.address_line_1}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

