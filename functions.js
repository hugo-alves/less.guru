var boxPrice;
var cigarsPerDay;
var age;
var gender;
var pricePerDay;
var pricePerYear;
var reduceBy;
var saveCigar;
var saveLife;
var savePerLife;
var saveYear;
var savePerYear;
​
function calculate(){
  var boxPrice = document.getElementById('boxPrice').value;
  var cigarsPerDay = document.getElementById('cigarsPerDay').value;
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var reduceBy = document.getElementById('reduceBy').value;
  // reduce
    var pricePerDay = pricePerCigar * cigarsPerDay;
    var saveCigar = (pricePerCigar * (cigarsPerDay - reduceBy));
    var pricePerCigar = ((boxPrice * 100) / 20 ) / 100;
    var pricePerYear =  pricePerCigar * cigarsPerDay * 365;
    var saveYear = pricePerCigar * (cigarsPerDay - reduceBy) * 365;
    var savePerYear = pricePerYear - saveYear;
     if(gender == 'male'){
        var pricePerLife = pricePerYear * (67 - age);
        var savePerLife = saveYear * (67 - age);
      }
      else if(gender == 'female'){
        var pricePerLife = pricePerYear * (73 - age);
        var savePerLife = saveYear * (73 - age);
      }
​
​
      $('#year').animateNumber({ number: pricePerYear });
      $('#life').animateNumber({number: pricePerLife});
​
      document.getElementById('form').style.display = 'none';
      document.getElementById('results').style.display = 'block';
      document.getElementById('day').innerHTML = pricePerCigar +"€";
​
};
function recalculate(){
  document.getElementById('form').style.display = 'block';
  document.getElementById('results').style.display = 'none';
};
function savings(){
    var reduceBy = document.getElementById('reduceBy').value;
    console.log(reduceBy);
  if(reduceBy != ""){
    var boxPrice = document.getElementById('boxPrice').value;
    var cigarsPerDay = document.getElementById('cigarsPerDay').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var reduceBy = document.getElementById('reduceBy').value;
      var pricePerDay = pricePerCigar * cigarsPerDay;
      var saveCigar = (pricePerCigar * (cigarsPerDay - reduceBy));
      var pricePerCigar = ((boxPrice * 100) / 20 ) / 100;
      var pricePerYear =  pricePerCigar * cigarsPerDay * 365;
      var saveYear = pricePerCigar * (cigarsPerDay - reduceBy) * 365;
      var savePerYear = pricePerYear - saveYear;
       if(gender == 'male'){
          var pricePerLife = pricePerYear * (67 - age);
          var savePerLife = pricePerLife - (saveYear * (67 - age));
        }
        else if(gender == 'female'){
          var pricePerLife = pricePerYear * (73 - age);
          var savePerLife = saveYear * (73 - age);
        }
​
    $('#saveLife').animateNumber({number: savePerLife});
    $('#saveYear').animateNumber({number: savePerYear});
  }
};
