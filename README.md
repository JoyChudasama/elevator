# Elevator Simulator (Console-Based)
> Built out of curiosity to simulate how elevators work behind the scenes using JavaScript in the console.

This is a simple JavaScript console-based Elevator Simulator that simulates an elevator servicing requests for specific floors in either upward or downward direction. It logs the elevator's movement and handles input validation for floors and directions.

Performance improvement can be made if used Min/Max Heap and it would also allow floors to visit change dynamically

# How It Works
1. Instantiate the elevator with a max number of floors:
    ```
    const elevator = new Elevator(10); // Building with 10 floors
    ```
2. Call the elevator from any floor:
    ``` 
    elevator.call(1, Elevator.DIRECTION_UP, [3, 5, 7]);
    ```
3. The elevator logs the path and returns to the default floor after servicing.


# Example Usage
```
const elevator = new Elevator(10);

// Go up from floor 1 to 3, 5, 7
elevator.call(1, Elevator.DIRECTION_UP, [3, 5, 7]);

// Go down from floor 9 to 6 and 2
elevator.call(9, Elevator.DIRECTION_DOWN, [6, 2]);
```