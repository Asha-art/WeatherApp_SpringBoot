var weatherMain = data.weather[0].main;

if (weatherMain == "Rain") {
  $("body").css("background-image", "url('http://i.imgur.com/xPhZpAd.jpg')");
} else if (weatherMain == "Sun") {
  $("body").css(
    "background-image",
    "url('https://i.redd.it/r7399lcixa101.jpg')"
  );
} else if (weatherMain == "Clear") {
  $("body").css(
    "background-image",
    "url('https://i.redd.it/j4ry6otc50001.jpg')"
  );
}

// function backgroundChange(weather) {
//   if (weatherinfo == Rain) {
//     document.body.style.backgroundImage = "url(rain3.gif)";
//   } else if (weatherinfo == Clouds) {
//     document.body.style.backgroundImage = "url(cloud.gif)";
//   } else if (weatherinfo == Clear) {
//     document.body.style.backgroundImage = "url(sky3.gif)";
//   } else {
//     document.body.style.backgroundImage = "url(background.gif)";
//   }
// }

//   https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

//sunny----- https://unsplash.com/photos/TSgwbumanuE
//cloudy ----https://images.unsplash.com/photo-1515890922410-ae767899d6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80
//rainy ---https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80
