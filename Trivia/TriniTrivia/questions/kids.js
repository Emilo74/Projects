import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function kidsQuestions(category) {
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
        message: "(1/6) What is the 10th letter of the alphabet? \n",
        choices: shuffle([
            'J',
            'I',
            'K',
            'H',
        ]),
    });

    return handleAnswer(answers.question1 == 'J');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "input",
        message: "(2/6) Which newspaper did Peter Parker sell photos of Spider Man to? ",
    });

    return handleAnswer(answers.question1.toLowerCase().includes("daily bugle") || answers.question1.toLowerCase().includes("daily bugel"));
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "input",
        message: "(2/6) Who is the main villan in the Ninja Turtles? ",
    });

    return handleAnswer(answers.question1.toLowerCase().includes("shredder"));
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) In Scrabble, which letter is values at 10 points? \n",
        choices: shuffle([
            'Q',
            'X',
            'Y',
            'A',
        ]),
    });

    return handleAnswer(answers.question1 == 'Q');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Based on the Lion Guard, a sequel to the Lion King, who is the son of Simba? \n",
        choices: shuffle([
            'Kion',
            'Simba Jr.',
            'Mufasa Jr.',
            'Kiara',
        ]),
    });

    return handleAnswer(answers.question1 == 'Kion');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(6/6) Which of the following is not a Teletubby? \n",
        choices: shuffle([
            'Dipsy',
            'Noo-noo',
            'Laa-laa',
            'Po',
        ]),
    });

    return handleAnswer(answers.question1 == 'Noo-noo');
}
