/*Global vars*/
const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");

const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

let numClosedDoors = 3;

const startButton = document.getElementById("start");
let currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

/*Engine*/
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if(choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  };
};

const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  };
};

const isClicked = (door) => {
  if(door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  };
};

const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver("win");
  } else if(isBot(door)) {
    gameOver();
  }
};

/*Functions*/
doorImage1.onclick = funct => {
  if(!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  };
};

doorImage2.onclick = funct => {
  if(!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  };
};

doorImage3.onclick = funct => {
  if(!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  };
};

startButton.onclick = () => {
  startRound();
};


const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};


const gameOver = (status) => {
  if(status === "win") {
    startButton.innerHTML = "You Win! Play again?";
  } else {
    startButton.innerHTML = "Game over! Play again?"  
  };
  currentlyPlaying = false;
};

startRound();




