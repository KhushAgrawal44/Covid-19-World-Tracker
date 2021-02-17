//import 'mapbox-gl/dist/mapbox-gl.css';

  fetch("https://corona.lmao.ninja/v2/countries")
  .then(response => response.json())
  .then(data =>{

    function updateMap(){
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
        <tr>
        <th style="color:red;">Red :</th><td>Death Rate >3</td>
        </tr>
        <tr>
        <th style="color:orange;">Orange :</th><td>2<=Death Rate<=3</td>
        </tr>
        <tr>
        <th style="color:yellow;">Yellow :</th><td>1<=Death Rate<2</td>
        </tr>
        <tr>
        <th style="color:green;">Green :</th><td>Death Rate<1</td>
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
    }
    updateMap();
//.......................................................

data.sort((a, b) => Number(b.cases) - Number(a.cases));


var table = document.createElement('table');

table.classList.add("table")

var tr = document.createElement('tr');

var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');
var th4 = document.createElement('th');
var th5 = document.createElement('th');
var th6 = document.createElement('th');
var th7 = document.createElement('th');
var th8 = document.createElement('th');
var th9 = document.createElement('th');

var head1 = document.createTextNode('Flag');
var head2 = document.createTextNode('Country');
var head3 = document.createTextNode('Total Cases');
var head4 = document.createTextNode('Active Cases');
var head5 = document.createTextNode('Total Deaths');
var head6 = document.createTextNode('Total Recovered');
var head7 = document.createTextNode('Critical Cases');
var head8 = document.createTextNode('Total tests');
var head9 = document.createTextNode('Population');


th1.appendChild(head1);
th2.appendChild(head2);
th3.appendChild(head3);
th4.appendChild(head4);
th5.appendChild(head5);
th6.appendChild(head6);
th7.appendChild(head7);
th8.appendChild(head8);
th9.appendChild(head9);

tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
tr.appendChild(th6);
tr.appendChild(th7);
tr.appendChild(th8);
tr.appendChild(th9);


table.appendChild(tr);

data.forEach(function(element){

    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');

  var flag = document.createElement("IMG");
  flag.setAttribute("src", `${element.countryInfo.flag}`);
  flag.setAttribute("width", "30px");
  flag.setAttribute("height", "30px");

    var country = document.createTextNode(element.country);
    var totalcases = document.createTextNode(element.cases);
    var activecases = document.createTextNode(element.active);
    var deaths = document.createTextNode(element.deaths);
    var recovered = document.createTextNode(element.recovered);
    var critical = document.createTextNode(element.critical);
    var tests = document.createTextNode(element.tests);
    var population = document.createTextNode(element.population);


    td1.appendChild(flag);
    td2.appendChild(country);
    td3.appendChild(totalcases);
    td4.appendChild(activecases);
    td5.appendChild(deaths);
    td6.appendChild(recovered);
    td7.appendChild(critical);
    td8.appendChild(tests);
    td9.appendChild(population);


    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td9);




    table.appendChild(tr);
})
document.body.appendChild(table);

var footer=document.createElement("footer");
footer.innerHTML="@ 2020 by KHUSH AGRAWAL";
footer.classList.add("footer-text");
document.body.appendChild(footer);


  })
