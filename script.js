//variable chessNumber & chessCharacters  which maps x and y cordinate to chess cordinates
//ex: [4,0] = "C8"

const chessNumber = [7, 6, 5, 4, 3, 2, 1, 0];
const chessCharacters = ["a", "b", "c", "d", "e", "f", "g", "h"];

let queen = {
  direction: "S",
  position: {
    x: 1,
    y: 1,
  },
  whereAbouts: [],
};

// Function calculates the new position of queen after taking the noOfSteps(number of steps)
// and direction into direction
const updateCoordinates = (
  xSteps,
  ySteps,
  xOperator = "add",
  yOperator = "add"
) => {

  // both variables will be updated with new positions
  let xValue = null;
  let yValue = null;

  // Updates x coordinate
  if (xOperator === "add") {
    xValue = queen.position.x + Number.parseInt(xSteps);
  } else if (xOperator === "sub") {
    xValue = queen.position.x - Number.parseInt(xSteps);
  }

  // updates y coordinate
  if (yOperator === "add") {
    yValue = queen.position.y + Number.parseInt(ySteps);
  } else if (yOperator === "sub") {
    yValue = queen.position.y - Number.parseInt(ySteps);
  }

  // checks if move is valid
  if (yValue >= 0 && yValue <= 7 && xValue >= 0 && xValue <= 7) {
    queen.position.y = yValue;
    queen.position.x = xValue;
  } else {
    console.log("Move not possible");
  }
};


// object holds the directions as key and will update the queens position as per the noOfsteps
// asked for by calling updateCoordinates function hen move function is called.
const Coordinates = {
  S: {
    fullForm: "South",
    move: (noOfSteps = 1) =>
      updateCoordinates(
        (xSteps = 0),
        (ySteps = noOfSteps),
        (xOperator = "add"),
        (yOperator = "add")
      ),
  },
  N: {
    fullForm: "North",
    move: (noOfSteps = 1) =>
      updateCoordinates(
        (xSteps = 0),
        (ySteps = noOfSteps),
        (xOperator = "add"),
        (yOperator = "sub")
      ),
  },
  E: {
    fullForm: "East",
    move: (noOfSteps = 1) =>
      updateCoordinates(
        (xSteps = noOfSteps),
        (ySteps = 0),
        (xOperator = "add"),
        (yOperator = "add")
      ),
  },
  W: {
    fullForm: "West",
    move: (noOfSteps = 1) =>
      updateCoordinates(
        (xSteps = noOfSteps),
        (ySteps = 0),
        (xOperator = "sub"),
        (yOperator = "add")
      ),
  },
  NE: {
    fullForm: "North East",
    move: (noOfSteps = 1) =>
      updateCoordinates(
        (xSteps = noOfSteps),
        (ySteps = noOfSteps),
        (xOperator = "add"),
        (yOperator = "sub")
      ),
  },
  NW: {
    fullForm: "North West",
    move: (noOfSteps = 1) =>
      updateCoordinates(
        (xSteps = noOfSteps),
        (ySteps = noOfSteps),
        (xOperator = "sub"),
        (yOperator = "sub")
      ),
  },
  SE: {
    fullForm: "South East",
    move: (noOfSteps = 1) =>
      updateCoordinates(
        (xSteps = noOfSteps),
        (ySteps = noOfSteps),
        (xOperator = "add"),
        (yOperator = "add")
      ),
  },
  SW: {
    fullForm: "South West",
    move: (noOfSteps = 1) =>
      updateCoordinates(
        (xSteps = noOfSteps),
        (ySteps = noOfSteps),
        (xOperator = "sub"),
        (yOperator = "add")
      ),
  },
};

// return queen location and direction
const queenLocation = () =>
  `${chessCharacters[queen.position.x]}${
    chessNumber[queen.position.y] + 1
  } facing "${Coordinates[queen.direction].fullForm}"`;

// Function takes new direction abbreviation i.e N,S,E as input so that the direction of queen can be changed.
const changeDirection = (newDirection) =>
  (queen.direction = newDirection.toUpperCase());

// function pulls the new/last position of queen and update the whereabouts property by pushin new position.
const updatePosition = () => {
  queen.whereAbouts.push(queenLocation());
};

const queenDetails = (noOfSteps = 1) => {
  movingDirection = queen.direction;
  oldXCoordinates = queen.position.x;
  oldYCoordinates = queen.position.y;
  console.log(`-> Queens's current position : ${queenLocation()} \n`);
  Coordinates[movingDirection].move(noOfSteps);
  updatePosition();
  if (
    oldXCoordinates !== queen.position.x ||
    oldYCoordinates !== queen.position.y
  ) {
    console.log(`-> Queen's new position : ${queenLocation()} \n`);
  }
};

// Moves Queen by one step
const moveForward = () => {
  queenDetails();
};

// Moves Queen by n steps
const jumpMoveForward = (noOfSteps) => {
  queenDetails(noOfSteps);
};

// returns queens position logs
const log = () => queen.whereAbouts;

console.log(`-> Queen's current position: ${queenLocation()} \n`);
console.log(`-> Changing Queen's direction to "South East" \n`);
changeDirection("SE");
jumpMoveForward(3);
console.log(`*****************`);
console.log(`-> Queen's cuurent position: ${queenLocation()} \n`);
console.log(`-> Changing Queen's direction to "South" \n`);
changeDirection("S");
jumpMoveForward(1);