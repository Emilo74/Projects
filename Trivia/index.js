#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "Hello $Welcome to my Trivia Game \n"
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}

    Use arrow keys to select an answer then press enter to sumbit
    If you get any questions wrong I will be ${chalk.bgRed("killed")}

    `)
}

async function askName() {
    const answers = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "What is your name?",
        default() {
            return "Player";
        },
    });

    playerName = answers.player_name;
}

async function question1() {
    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "What is 5 + 4?",
        choices: [
            '5',
            '4',
            '9',
            '12',
        ],
    });

    return handleAnswer(answers.question1 == '9');
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({text: `Nice work ${playerName}. That's a legit answer!`});
    }
    else {
        spinner.error({text: `Sighh Game over, you lose ${playerName}!`})
        process.exit(1)
    }
}

function winner() {
    console.clear();
    const msg = `Congratulations ${playerName} !!! \n You win $ 1 , 0 0 0 , 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    })
}


await welcome();
await askName();
await question1();
await winner();
