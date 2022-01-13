$(document).ready(function() {
  const interest = confirm("Wanna see some cool hybrids?");

  if (interest === true) {
    $('#animals').show();
  } else {
    $('#view-list').show();
  }
});

function changeAnimal() {
  $('#swamaInfo').hide();
  $('#pugrillaInfo').hide();
  $('#dorseInfo').hide();
  $('#shorseInfo').hide();
  const animalView = $('#selectAnimal').val();

    if (animalView === "swama") {
      $('#swamaInfo').toggle();
    } else if (animalView === "pugrilla") {
      $('#pugrillaInfo').toggle();
    } else if (animalView === "shorse") {
      $('#shorseInfo').toggle();
    } else if (animalView === "dorse") {
      $('#dorseInfo').toggle();
    }
  }