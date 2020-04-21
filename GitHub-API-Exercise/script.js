'use strict';

function watchForm() {
    $("#js-form").submit(event => {
        event.preventDefault();
        $("ul").empty();
        const searchTerm = $('#js-search-term').val();
        fetchUserHandles(searchTerm);
        $("#js-search-term").val('');
    })
}

function fetchUserHandles(username){
  fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
      if (response.ok) {
          return response.json()
      }
      throw new Error(response.statusText);
    })
  .then(responseJson => displayResults(responseJson))
  .catch(err => {
      $("#js-error-message").text(`Something went wrong: ${err.message}`);
  })
}

function displayResults(users){
    for (let i = 0; i < users.length; i++) {
        $("ul").append(`<li><h2>${users[i].name}</h2><a href="${users[i].owner.url}">${users[i].owner.url}</a></li>`);
    }
}

function startFunctions() {
  watchForm();
  }

startFunctions();