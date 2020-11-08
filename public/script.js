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