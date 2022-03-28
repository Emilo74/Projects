import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function sportQuestions(category) {
    await mq1(category);
    await mq2(category);
    await mq3(category);
    await mq4(category);
    await mq5(category);
    await mq6(category);
}

async function mq1(category) {
    console.clear()
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(1/6) Who is the current world record holder for the highest individual score in Test cricket? \n",
        choices: shuffle([
            'Brian Lara',
            'Sachin Tendulkar',
            'Sir Garfield Sobers',
            'Matthew Hayden',
        ]),
    });

    return handleAnswer(answers.question1 == 'Brian Lara');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) What is the official at a tennis game called? \n",
        choices: shuffle([
            'Umpire',
            'Referee',
            'Scorer',
            'Match official',
        ]),
    });

    return handleAnswer(answers.question1 == 'Umpire');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) As written in the IFAB lawbook, what decides a drawn football game after extra-time has elapsed in a knockout game? \n",
        choices: shuffle([
            'Kicks from the penalty mark',
            'Penalty shootout',
            'Golden goal',
            'Penalty kicks',
        ]),
    });

    return handleAnswer(answers.question1 == 'Kicks from the penalty mark');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) How many pins are there in a standard bowling game? \n",
        choices: shuffle([
            '10',
            '15',
            '8',
            '20',
        ]),
    });

    return handleAnswer(answers.question1 == '10');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Which player ser the NBA single-game scoring record by tallying 100 pints? \n",
        choices: shuffle([
            'Wilt Chamberlain',
            'Michael Jordan',
            'Lebron James',
            'Steph Curry',
        ]),
    });

    return handleAnswer(answers.question1 == 'Wilt Chamberlain');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(6/6) Which of the following is not a field event contested at the Olympics? \n",
        choices: shuffle([
            'Pole vault',
            'Javelin',
            'Triathlon',
            'High jump',
        ]),
    });

    return handleAnswer(answers.question1 == 'Triathlon');
}
