$(document).ready(function () {

  createGrid(16);

  $('.container').on('mouseenter', '.square', function() {
     $(this).css('background-color', getRandColor(6));
  });

  $('.clear').on('click', function() {
    var rowLength = prompt("Please specify the row length of the new grid", "1-64");
    if (rowLength != nil) {
      $('.square').remove();
      createGrid(rowLength);
    }
  });

  function createGrid(rowLength) {
    // Given a rowLength, which is the number of squares in a row,
    // finds the square side length that allows the number of squares
    // specified in rowLength to fit into the container
    var sideLength = (480 / rowLength) - 1;
    
    // Populate the container with rowLength * rowLength squares
    for (i = 0; i < rowLength * rowLength; i++) {
      $('.container').append("<div class='square'></div>");
    } 
    
    // Changes the side length of the squares to the found length
    var $square = $('.square');
    $square.css('height', sideLength);
    $square.css('width', sideLength);
  }

  function getRandColor(brightness){
    // Found on StackOverflow
    // Six levels of brightness from 0 to 5, 0 being the darkest
    var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
    var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
    var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
    return "rgb(" + mixedrgb.join(",") + ")";
}

});

