window.addEventListener('load', function() {
  var tweetArea = document.getElementById('tweet-area');
  tweetArea.addEventListener('keyup',function(event) {
    console.log(event.target.value.trim());    
    console.log(event.target.value.trim().length);
  });
});