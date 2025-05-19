class Elevator {
    static DIRECTION_UP = 'UP';
    static DIRECTION_DOWN = 'DOWN';

    constructor(floors) {
        this.floors = floors;
        this.floorsToVisit = []; 
        this.currFloor = 1;
        this.currDirection = '';
        this.log = '';
        this.defaultFloor = 1;
    }

    call(floor, direction, floorsToVisit) {
        if (floor > this.floors) throw new Error(`Invalid Floor. Please choose between 1 to ${this.floors}`);
        if (direction !== Elevator.DIRECTION_UP && direction !== Elevator.DIRECTION_DOWN) throw new Error(`Invalid Direction. Valid choices are ${Elevator.DIRECTION_UP} or ${Elevator.DIRECTION_DOWN}`);
        if (new Set(floorsToVisit).size !== floorsToVisit.length) throw new Error(`Can not visit same floor twice in a path.`);
        
        this.currDirection = direction;
        this.currFloor = floor ?? this.defaultFloor;  // Elevator arrived
        this.floorsToVisit = floorsToVisit; // People are in and chose which floors to visit

        this.decideDirection();
    }

    decideDirection() {
        console.log(`\n\n- Current FLOOR: ${this.currFloor} -`);
        switch (this.currDirection) {
            case Elevator.DIRECTION_UP:
                this.up();
                break;
            case Elevator.DIRECTION_DOWN:
                this.down();
                break;
            default:
                throw Error('Invalid Direction');
        }

        this.returnBackToDefaultFloor();
    }

    returnBackToDefaultFloor() {
        if (this.currFloor !== this.defaultFloor) {
            console.log(`- GOING BACK TO DEFAULT FLOOR ${this.defaultFloor}`);
            this.currFloor = this.defaultFloor;
        }

        this.log += '* ';
        console.log(`Full PATH Untill Now: ${this.log}`);
    }

    up() {
        console.log(`↑↑↑↑↑↑↑↑↑↑ GOING ${Elevator.DIRECTION_UP} ↑↑↑↑↑↑↑↑↑↑`);
        this.floorsToVisit.sort((a, b) => a - b);
        if (this.floorsToVisit[this.floorsToVisit.length - 1] > this.floors) throw new Error(`Invalid Floor ${this.floorsToVisit[this.floorsToVisit.length - 1]}`);
        this.move(this.floorsToVisit);
    }

    down() {
        console.log(`↓↓↓↓↓↓↓↓↓↓ GOING ${Elevator.DIRECTION_DOWN} ↓↓↓↓↓↓↓↓↓↓`);
        this.floorsToVisit.sort((a, b) => b - a);

        this.move(this.floorsToVisit);
    }

    move(floorsToVisit) {
        while (floorsToVisit.length > 0) {

            const floor = floorsToVisit.shift();

            if (floor < 1 || floor > this.floors) throw new Error(`Invalid Floor ${floor}`);

            if (this.currFloor !== floor) {
                this.currFloor = floor;
                this.log += floor + ' -> ';
                console.log(this.currFloor);
            }
        }
    }
}

const elevator = new Elevator(10);
elevator.call(2, Elevator.DIRECTION_DOWN, []);
elevator.call(1, Elevator.DIRECTION_UP, [3, 5, 7]);
elevator.call(9, Elevator.DIRECTION_DOWN, [6, 2]);
elevator.call(4, Elevator.DIRECTION_UP, [6, 8]);