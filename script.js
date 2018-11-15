var req = new XMLHttpRequest();
req.open('GET','https://api.punkapi.com/v2/beers?brewed_after=11-2013', true);
req.send();

req.onload = function() {
//console.log(req);

  var Music = new Tone.Player("99_bottles_of_beer.wav").toMaster();
  //starts music as soon as the buffer is loaded
  Music.autostart = true;
  Music.loop = true;

  var response = req.response;
  var beerList = JSON.parse(response);
  console.log(beerList);

  var i;
  for (i = 0; i < beerList.length; i++) {

      var newEl = document.createElement('li');
      var newText = document.createTextNode(beerList[i].name);
      newEl.appendChild(newText);
      var position = document.getElementsByTagName('ul')[0];
      position.appendChild(newEl);

    }
}
