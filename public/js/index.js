//import 'mapbox-gl/dist/mapbox-gl.css';
function updateMap(){
  fetch("https://corona.lmao.ninja/v2/countries")
  .then(response => response.json())
  .then(data =>{
    data.forEach(function(element){

      const lattitude=element.countryInfo.lat;
      const longitude=element.countryInfo.long;

    const deathrate=((element.deaths/element.cases)*100).toFixed(2);

      var popup = new mapboxgl.Popup()
      .setHTML(`<table>
        <caption><h2>${element.country}</h2></caption>
        <tr>
        <th><h3>Total Cases :</h3></th><td><h3>${element.cases}</h3></td>
        </tr>
        <tr>
        <th><h3>Active Cases :</h3></th><td><h4>${element.active}</h4></td>
        </tr>
        <tr>
        <th><h3>Deaths :</h3></th><td><h4>${element.deaths}</h4></td>
        </tr>
        <tr>
        <tr>
        <th><h3>Death Rate :</h3></th><td><h4>${deathrate}%</h4></td>
        </tr>
        <tr>
        <th><h3>Recovered :</h3></th><td><h4>${element.recovered}</h4></td>
        </tr>
        <tr>
        <th><h3>Total Tests :</h4></th><td><h4>${element.tests}</h4></td>
        </tr>
        <tr>
        <th><h3>Population :</h4></th><td><h4>${element.population}</h4></td>
        </tr>
        </table>`);

        if(deathrate > 3)
        {
          color="red";
        }
        else if(deathrate >= 2 && deathrate<=3)
        {
          color="orange" ;
        }

        else if(deathrate >= 1 && deathrate<2)
        {
          color="Yellow";
        }
        else{color="green";}

              new mapboxgl.Marker({
              draggable: false,
              color:color,
              anchor:"bottom"



               })
     .setLngLat([longitude,lattitude])
    .setPopup(popup)
     .addTo(map);
    })
  })
}
updateMap();
