// Serge Says
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

//if any question (?) --> "Sure"
//if empety string --> "Fine be that way"
//if CAPS --> "Woah, chill out"
//everything else --> "Whatever"

const serge = function (str) {

  if (str === null || str === undefined || str === "") {
    console.log("Fine, be that way.");
  } else if (str.slice(-1) === "?") {
    console.log("Sure.");
  } else if (str === str.toUpperCase()) {
    console.log("Chill out!");
  } else {
    console.log("Whatever.");
  };
};


serge();
