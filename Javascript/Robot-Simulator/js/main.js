// Robot Simulator
// Badger Robotics manufactures robots that have three possible movements:
//
// turn right
// turn left
// advance
// The robot factory's test facility (aka "your browser's console")
//  has a simulator which can take a string of letters and feed this
//  into a robot as instructions.
//
// Requirements (DO THIS IN JAVASCRIPT)
// Draw a grid on the page - like a chess board - 8 x 8

// Have a function to change the fake robots orientation - north, south, east, west
// Have a function to advance one step
// Don't worry about testing, just make it look decent.
// You can use jQuery and what ever other libraries you want
// robot = new Robot({ name: "Wolf" });
//
// robot.turn( "right" );
// robot.turn( "left" );
// robot.advance();
// Extra Credit
// Control the robot with your keyboard (left, right, forward)
// Error handling - don't let it go off the board
// Animations
// Advance a few steps at a time
// Pass in a series of instructions
// Bring the pretty
let robot;

$(document).ready(function () {

  const directions = ["up", "right", "down", "left"];

  const createBoard = function () {
    const $board = $('<table></table>');
    $('body').append($board);
    for (let i = 0; i < 9; i++) {
      const $row = $('<tr></tr>');
      $('table').append($row);
      for (let j = 0; j < 9; j++) {
        const $square = $('<td></td>');
        $row.append($square);
      };
    };
  };

  const Robot = function () {

    let x = 0;
    let y = 0;
    let dir = "up";

    const $bot = $('<div></div>');
    $bot.addClass('robot up');
    $('body').append($bot);

    const moveRobot = function () {
      $bot.css("top", (window.innerHeight / 2 + y * 40 - 20) + 'px');
      $bot.css("left", (window.innerWidth / 2 + x * 40 - 20) + 'px');
    };

    moveRobot();

    $(window).resize(function () {
      $bot.css("top", (window.innerHeight / 2 + y * 40 - 20) + 'px');
      $bot.css("left", (window.innerWidth / 2 + x * 40 - 20) + 'px');
    });

    const turn = function ( direction ) {

      $('.robot').removeClass("up down left right");

      if ( direction === "left" ) {
        if ( directions.indexOf( dir ) > 0) {
          dir = directions[ directions.indexOf(dir) - 1 ];
        } else {
          dir = directions[3];
        };
      } else {
        if ( directions.indexOf(dir) < 3 ) {
          dir = directions[ directions.indexOf(dir) + 1 ];
        } else {
          dir = directions[0];
        };

      $('robot').addClass(dir); //String  - up, down, left, right ?
    };

    return {
      left: function () {
        turn("left");
      },

      right: function () {
        turn("right");
      },

      up: function () {
        turn("up");
      },

      down: function () {
        turn("down");
      },
    };

  };

  createBoard();
  robot = new Robot();
});
// const robotSim = {
//   grid: function () {
//
//   },
//
//   north
// };
