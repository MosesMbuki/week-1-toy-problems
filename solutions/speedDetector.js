// solutions/speedDetector.js

function speedDetector() {
    const speed = parseFloat(prompt("Enter car speed (km/s):"));
  
    if (isNaN(speed) || speed < 0) {
      return "Invalid input! Speed must be a positive number.";
    }
  
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints > 12) {
        return "License suspended";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }