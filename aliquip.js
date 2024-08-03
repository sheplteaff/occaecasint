class Robot {
    constructor() {
        this.direction = 0; // initial direction in degrees
    }

    turnFullCircle() {
        /// completes a full turn.
        this.direction = (this.direction + 360) % 360;
    }

    getDirection() {
        return this.direction;
    }
}

// Usage
const robot = new Robot();
console.log(robot.getDirection()); // Output: 0
robot.turnFullCircle();
console.log(robot.getDirection()); // Output: 0 (since a full turn brings it back to the same direction)
