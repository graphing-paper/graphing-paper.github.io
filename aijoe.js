const joe = document.getElementById('joe');
const petButton = document.getElementById('pet-button');
const feedButton = document.getElementById('feed-button');

// Add a click event listener to the joe element
joe.addEventListener('click', function() {
  // Joe shakes
  joe.classList.add('shake');

  // Remove the shake class after 500ms
  setTimeout(function() {
    joe.classList.remove('shake');
  }, 500);
});

// Add a click event listener to the feed button
feedButton.addEventListener('click', function() {
  alert('Joe hamburger');
});
