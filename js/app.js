window.addEventListener('load', function() {
  var tweetArea = document.getElementById('tweet-area');
  var tweetBtn = document.getElementById('tweet-btn');
  var countDinamic = document.getElementById('count');
  var MAXCHARACTERS = 140;
  tweetArea.addEventListener('keyup',function(event) {
    if (event.target.value.trim().length) {
      var total = MAXCHARACTERS - event.target.value.trim().length;
      // console.log(total);
      tweetBtn.disabled = false;
      countDinamic.textContent = total;
      console.log(event.target.value.trim());
    } else {
      tweetBtn.disabled = false;
      countDinamic.textContent = MAXCHARACTERS;
      // console.log('caja vacia');
    }
    console.log(event.target.value.trim());    
    console.log(event.target.value.trim().length);
  });

  tweetBtn.addEventListener(function(event) {
    event.preventDefault(); // Para que no recargue
    console.log(tweetArea.value);
  });
});