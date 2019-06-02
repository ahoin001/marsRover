// Rover Object Goes Here
// ======================


var rover = {

  direction: 'N',
  x: 0,
  y: 0,

  // Array (log) of coordinates. Starts at 0,0 will add to later
  // Using object as a coordinate to save x and y values
  travelLog: [{
    x: 0,
    y: 0
  }]

};

// ======================

function viewLog(rover) {
  for (i = 0; i < rover.travelLog.length; i++) {
    console.log(rover.travelLog[i].x + ", " + rover.travelLog[i].y);

  }
}

function turnLeft(rover) {
  console.log('turnLeft was called!');

  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log('Rover now facing West');
      break;
    case 'E':
      rover.direction = 'N';
      console.log('Rover now facing North');
      break;
    case 'W':
      rover.direction = 'S';
      console.log('Rover now facing South');
      break;
    case 'S':
      rover.direction = 'E';
      console.log('Rover now facing East');
      break;
    default:
      console.log('Somethiing went wrong');
  }

}

function turnRight(rover) {
  console.log('turnRight was called!');

  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log('Rover now facing East');
      break;
    case 'E':
      rover.direction = 'S';
      console.log('Rover now facing South');
      break;
    case 'S':
      rover.direction = 'W';
      console.log('Rover now facing West');
      break;
    case 'W':
      rover.direction = 'N';
      console.log('Rover now facing North');
      break;
    default:
      console.log('Somethiing went wrong');
  }

}

function moveForward(rover) {
  console.log('moveForward was called');


  switch (rover.direction) {

    case ('N'):
      if (rover.y - 1 < 0) {
        console.log('Can not move foward this way, reached North cliff');
        break;
      }
      rover.y = rover.y - 1;

      console.log('moved North by 1');
      console.log('[' + rover.x + ',' + rover.y + ']');

      // Log the new point into array
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });

      break;

    case ('S'):
      if (rover.y + 1 > 9) {
        console.log('Can not move foward this way, reached South cliff');
        break;
      }
      rover.y = rover.y + 1;

      console.log('moved South by 1');
      console.log('[' + rover.x + ',' + rover.y + ']');

      // Log the new point into array
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });

      break;

    case ('E'):
      if (rover.x + 1 > 9) {
        console.log('Can not move foward this way, reached East cliff');
        break;
      }
      rover.x = rover.x + 1;

      console.log('moved East by 1');
      console.log('[' + rover.x + ',' + rover.y + ']');

      // Log the new point into array
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });

      break;

    case ('W'):
      if (rover.x - 1 < 0) {
        console.log('Can not move foward this way, reached West cliff');
        break;
      }
      rover.x = rover.x - 1;

      console.log('moved West by 1');
      console.log('[' + rover.x + ',' + rover.y + ']');

      // Log the new point into array
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });

      break;

    default:
      console.log('Something went wrong');

  }

}

function moveBackward(rover) {
  console.log('moveBackward was called');

  switch (rover.direction) {

    case ('N'):
      if (rover.y + 1 > 9) {
        console.log('Can not move backward this way, reached South cliff');
        break;
      }
      rover.y = rover.y + 1;

      console.log('moved South by 1');
      console.log('[' + rover.x + ',' + rover.y + ']');

      // Log the new point into array
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });

      break;

    case ('S'):
      if (rover.y - 1 < 0) {
        console.log('Can not move backward this way, reached North cliff');
        break;
      }
      rover.y = rover.y - 1;

      console.log('moved North by 1');
      console.log('[' + rover.x + ',' + rover.y + ']');

      // Log the new point into array
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });

      break;

    case ('E'):
      if (rover.x - 1 < 0) {
        console.log('Can not move backward this way, reached West cliff');
        break;
      }
      rover.x = rover.x - 1;

      console.log('moved West by 1');
      console.log('[' + rover.x + ',' + rover.y + ']');

      // Log the new point into array
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });

      break;

    case ('W'):
      if (rover.x + 1 > 9) {
        console.log('Can not move backward this way, reached East cliff');
        break;
      }
      rover.x = rover.x + 1;

      console.log('moved East by 1');
      console.log('[' + rover.x + ',' + rover.y + ']');

      // Log the new point into array
      rover.travelLog.push({
        x: rover.x,
        y: rover.y
      });

      break;

  }

}

function instructions(command = '') {

  var theOrder;

  for (i = 0; i < command.length; i++) {

    // hold value of current character in string commmand
    theOrder = command.charAt(i);

    //make sure command is always lower case for testing
    theOrder.toLocaleLowerCase();

    // test the command against available functions
    switch (theOrder) {

      case 'r':
        turnRight(rover);
        break;

      case 'l':
        turnLeft(rover);
        break;

      case 'f':
        moveForward(rover);
        break;

      case 'b':
        moveBackward(rover);
        break;

      default:
        console.log('Please only put r, l, b, or f in the string!');
    }

  }

}

function currentFace(rover) {
  console.log('Currently facing ' + rover.direction);
}