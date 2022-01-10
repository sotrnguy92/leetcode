const isRobotBounded = function(instructions) {
    const coordinates = [0,0];
    let direction = 0;


    for (let i = 0; i < (instructions.length); i++) {
        if (instructions[i % instructions.length] === "G"){
            if (direction % 4 === 0 ){
                coordinates[1] ++;
            }
            else if (direction % 4 === 1 || direction % 4 === -3){
                coordinates[0] ++;
            }
            else if (direction % 4 === 2 || direction % 4 === -2){
                coordinates[1] --;
            }
            else if (direction % 4 === 3 || direction % 4 === -1){
                coordinates[0] --;
            }
        }
        else if (instructions[i % instructions.length] === "L"){
            direction --;
        }
        else if (instructions[i % instructions.length] === "R"){
            direction ++;
        }

        if (JSON.stringify(coordinates) === JSON.stringify([0,0]) && (i+1) % instructions.length ===0){
            return true
        }

    }
    return false
};


console.log( isRobotBounded(['G',"L"]))