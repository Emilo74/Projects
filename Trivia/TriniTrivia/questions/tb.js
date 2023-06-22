import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function tbQuestions(category) {
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
        message: "(1/6) Who was the first female Prime Minister of T&T? \n",
        choices: shuffle([
            'Ms. Kamla Persad Bissessar',
            'Ms. Paula Mae Weekes',
            'Ms. Shamfa Cudjoe',
            'Ms. Ramona Ramdial',
        ]),
    });

    return handleAnswer(answers.question1 == 'Ms. Kamla Persad Bissessar');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) Who is the only person to serve as both Prime Minister and President of T&T? \n",
        choices: shuffle([
            'ANR Robinson',
            'Sir Ellis Clarke',
            'George Maxwell Richards',
            'George Chambers',
        ]),
    });

    return handleAnswer(answers.question1 == 'ANR Robinson');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "input",
        message: "(3/6) Christopher Colombus used 3 ships on his first voyage to T&T in 1942, they were the Nina, Santa Maria and _____ ? ",
    });

    return handleAnswer(answers.question1.toLowerCase().includes("pinta"));
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) In what city did Hasley Crawford win T&T's first Olympic gold medal? \n",
        choices: shuffle([
            'Montreal',
            'Tokyo',
            'Berlin',
            'Shanghai',
        ]),
    });

    return handleAnswer(answers.question1 == 'Montreal');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Who re-discovered the pitch lake in 1595? \n",
        choices: shuffle([
            'Sir Walter Raleigh',
            'Uriah Buttler',
            'Churchill Roosevelt',
            'Claude Noel',
        ]),
    });

    return handleAnswer(answers.question1 == 'Sir Walter Raleigh');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(6/6) Which of the folowing did not win an international beauty pageant for T&T? \n",
        choices: shuffle([
            'Nicole Dyer',
            'Penny Commisiong',
            'Wendy Fitzwilliam',
            'Giselle Laronde',
        ]),
    });

    return handleAnswer(answers.question1 == 'Nicole Dyer');
}
