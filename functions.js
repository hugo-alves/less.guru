var boxPrice;
var cigarsPerDay;
var age;
var gender = "male";
var pricePerDay;
var pricePerYear;
var reduceBy = 1;
var saveCigar;
var saveLife;
var savePerLife;
var saveYear;
var savePerYear;
$(document).ready(function() {
  if(gender == "male"){
    $('.male').addClass('active');
    $('.female').removeClass('active');
  }
});

function getGender(value){
  gender = value;
  if(gender == "female"){
    $('.female').addClass('active');
    $('.male').removeClass('active');
  }
  else{
    $('.female').removeClass('active');
    $('.male').addClass('active');
  }
}

function calculate(){

  var boxPrice = document.getElementById('boxPrice').value.replace(",",".");
  var cigarsPerDay = document.getElementById('cigarsPerDay').value;
  var age = document.getElementById('age').value;
  var reduceBy = document.getElementById('reduceBy').value;

  // reduce
    var pricePerDay = pricePerCigar * cigarsPerDay;
    var saveCigar = (pricePerCigar * (cigarsPerDay - reduceBy));
    var pricePerCigar = Math.round((((boxPrice * 100) / 20 ) / 100) * 100) / 100;
    var pricePerYear =  pricePerCigar * cigarsPerDay * 365;
    var pricePerMonth =  pricePerCigar * cigarsPerDay * 30;
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


      $('#year').animateNumber({ number: pricePerYear });
      $('#life').animateNumber({number: pricePerLife});

      document.getElementById('inputs-container').style.display = 'none';
      document.getElementById('results').style.display = 'flex';
      document.getElementById('reduceContainer').style.display = 'flex';
      document.getElementById('day').innerHTML = pricePerCigar +"€";
      savings();

};
function recalculate(){
  document.getElementById('inputs-container').style.display = 'block';
  document.getElementById('reduceContainer').style.display = 'none';
  document.getElementById('form').style.display = 'block';
  document.getElementById('results').style.display = 'none';
};
function savings(){
    var reduceBy = document.getElementById('reduceBy').value;
  if(reduceBy != ""){
    var boxPrice = document.getElementById('boxPrice').value.replace(",",".");
    var cigarsPerDay = document.getElementById('cigarsPerDay').value;
    var age = document.getElementById('age').value;
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
    document.getElementById('savings').style.display = 'block';
    document.getElementById('restart').style.display = 'block';
    $('#saveLife').animateNumber({number: savePerLife});
    $('#saveYear').animateNumber({number: savePerYear});
  }
};



function showMailingPopUp() {
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us4.list-manage.com","uuid":"555bb9cad7ff72af1ffb50bc3","lid":"fc04050a72"}) })
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.onload = function(){ 
      document.getElementById("open-popup").onclick = function() {showMailingPopUp()};
    };

};


