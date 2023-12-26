import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 100 + 1);
let tries = 0;
let runAgain = 1;
for (let r = 0; r < runAgain; r++) {
    for (let answer = 0; answer !== randomNumber; answer) {
        let user = await inquirer.prompt([
            {
                type: "number",
                name: "GuessingNumber",
                message: "Guess The Number between 1 - 100 : "
            }
        ]);
        tries++;
        if (user.GuessingNumber === randomNumber) {
            console.log("You have Guessed the right number");
            console.log(`${randomNumber} was the right number`);
            console.log(`You guessed the number in ${tries} Tries`);
            break;
        }
        else if (user.GuessingNumber > randomNumber) {
            console.log("Lesser");
        }
        else if (user.GuessingNumber < randomNumber) {
            console.log("Greater");
        }
    }
    let again = await inquirer.prompt([
        {
            type: "list",
            name: "runAgain",
            message: "Do you want to play again?",
            choices: ['Yes', 'No']
        }
    ]);
    if (again.runAgain === 'Yes') {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        runAgain += 1;
        tries = 0;
    }
    else {
        break;
    }
}
