import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function generalQuestions(category) {
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
        message: "(1/6) How many months are in a leap year? \n",
        choices: shuffle([
            '12',
            '4',
            '10',
            '28',
        ]),
    });

    return handleAnswer(answers.question1 == '12');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) How many bones are there in an elephant's trunk? \n",
        choices: shuffle([
            '0',
            '1',
            '5',
            '10',
        ]),
    });

    return handleAnswer(answers.question1 == '0');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) What is the collective noun given for a group of monkeys? \n",
        choices: shuffle([
            'Barrel',
            'Group',
            'Pack',
            'School',
        ]),
    });

    return handleAnswer(answers.question1 == 'Barrel');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) If I had a fear of rain, what phobia would I have? \n",
        choices: shuffle([
            'Ombrophobia',
            'Arachnophobia',
            'Hydrophobia',
            'Claustrophobia',
        ]),
    });

    return handleAnswer(answers.question1 == 'Ombrophobia');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) When checking for gamble in the card game, 'All Fours', what is the maximum number of points that can be obtained? \n",
        choices: shuffle([
            '80',
            '40',
            '75',
            '100',
        ]),
    });

    return handleAnswer(answers.question1 == '80');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "input",
        message: "(6/6) The 2 atomic bombs that resulted in the end of WWII were dropped in Hiroshima and which other city? ",
    });

    return handleAnswer(answers.question1.toLowerCase().includes("nagasaki"));
}
