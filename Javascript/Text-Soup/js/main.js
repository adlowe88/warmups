// Text Soup
// Using HTML, CSS and JS + jQuery, create a web page which prints a random word
// from a large sample of text, in a random position on the page, every 100 milliseconds.
//
// Hints:
// Grab some plain text (20-50 paragraphs should do) from one the top 100 novels
//  in the public domain at Project Gutenberg; paste the text into a hidden
//  <div> element in your HTML file, and use jQuery to get the contents of the div.
// Bonus:
// Fade the text in to make it appear, and then fade it out to disappear, to stop
// the page getting too dense with texty text.
// Try random colours, random font sizes, rotation, whatever floats your boat.
$(document).ready(function () {

  const words = $('#words').text().split(/[ ;\-,.\n]+/);
  console.log(words);

  const $body = $('body');

  const rand = function ( max ) {
    return Math.floor( Math.random() * max );
  };

  const putWord = function () {
    const randomIndex = rand( words.length );
    // console.log(randomIndex);
    const text = words [ randomIndex ];
    // console.log(text);
    const $div = $('<div class = "word"></div>').html(text);

    $div.css({
      top: rand( window.innerHeight ) + 'px',
      left: rand( window.innerWidth ) + 'px',
      fontSize: ( 40 + rand(80) ) + 'px',
      color: 'rgb( ' + rand(255) + ', ' + rand(255) + ',' + rand(255) + ')',
    });

    $div.appendTo( $body );
  };
  putWord();
  // setInterval(putWord, 100);
});
