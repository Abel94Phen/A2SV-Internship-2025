import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function DisplayAction() {
    console.log("Main Menu");
    console.log("1. See All Tasks");
    console.log("2. Add a new Task");
    console.log("3. Update a task");
    console.log("4. Delete a Task");
    console.log("5. Exit");
}

function GetChoice(): Promise<number> {
    return new Promise((resolve) => {
        rl.question('Enter your choice: ', (answer) => {
            resolve(parseInt(answer));
        });
    });
}

async function main() {
    while (true) {
        DisplayAction();
        const choice = await GetChoice();
        switch (choice) {
            case 1:
                console.log("See All Tasks");
                break;
            case 2:
                console.log("Add a new Task");
                break;
            case 3:
                console.log("Update a task");
                break;
            case 4:
                console.log("Delete a Task");
                break;
            case 5:
                console.log("Exit");
                rl.close();
                return;
            default:
                console.log("Invalid choice, please try again.");
        }
    }
}

main();