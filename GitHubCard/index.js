/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// test function to see data
function testGithubUserData(username) {
  axios.get('https://api.github.com/users/' + username)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log('GET error with axios in testGithubUserData(' + username + ')');
  })
  .finally(() => {
    console.log('GET axios operation complete in testGithubUserData(' + username + ')');
  });
}

testGithubUserData('technicaldebtgames'); //output data to console from github

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

var cards = document.querySelector('.cards');
//console.log(cards); //check to make sure we have grabbed the right element

// function to use for generating DOM elements
function generateCardFromGithubUserData(username) {
  axios.get('https://api.github.com/users/' + username)
  .then(response => {
    cards.appendChild(createUserCard(response));
  })
  .catch(error => {
    console.log('GET error with axios in getGithubUserData(' + username + '), error is:');
    console.log(error);
  })
  .finally(() => {
    console.log('GET axios operation complete in getGithubUserData(' + username + ') and card is generated.');
  });
}

generateCardFromGithubUserData('technicaldebtgames');

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

var followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

for (var i = 0; i < followersArray.length; i++) {

  generateCardFromGithubUserData(followersArray[i]);

}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createUserCard(dataObj) {

  const card = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(img);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.classList.add('card');
  name.classList.add('name');
  userName.classList.add('username');

  img.src = dataObj.data.avatar_url;
  name.textContent = dataObj.data.name;
  userName.textContent = dataObj.data.login;
  location.textContent = dataObj.data.location;
  profileLink.href = dataObj.data.html_url;
  profileLink.textContent = dataObj.data.html_url;
  followers.textContent = dataObj.data.followers;
  following.textContent = dataObj.data.following;
  bio.textContent = dataObj.data.bio;

  return card;

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
