import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function triniQuestions(category) {
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
        message: "(1/6) What is the local name for eggplant? \n",
        choices: shuffle([
            'Bhigan',
            'Melongene',
            'Ochro',
            'Yam',
        ]),
    });

    return handleAnswer(answers.question1 == 'Bhigan');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) Which folklore character is said to protect the forest? \n",
        choices: shuffle([
            'Papa Bois',
            'Douen',
            'Soucouyant',
            'La Diablesse',
        ]),
    });

    return handleAnswer(answers.question1 == 'Papa Bois');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) Who wrote the National Anthem of T&T? \n",
        choices: shuffle([
            'Patrick Castagne',
            'Marjorie Padmore',
            'Mighty Sparrow',
            'David Rudder',
        ]),
    });

    return handleAnswer(answers.question1 == 'Patrick Castagne');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) What is the name given to the collective architectural landmarks across the Queen's Park Savannah? \n",
        choices: shuffle([
            'Magnificent 7',
            'Magnificent 5',
            'Magnificent 6',
            'Magnificent 8',
        ]),
    });

    return handleAnswer(answers.question1 == 'Magnificent 7');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Which of the following is NOT a major dam in T&T? \n",
        choices: shuffle([
            'Navet',
            'Caroni-Arena',
            'Hillsborough',
            'Horris',
        ]),
    });

    return handleAnswer(answers.question1 == 'Horris');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(6/6) Who was the last Governor General of T&T? \n",
        choices: shuffle([
            'Sir Ellis Clarke',
            'Sir Solomon Hochoy',
            'ANR Robinson',
            'Uriah Buttler',
        ]),
    });

    return handleAnswer(answers.question1 == 'Sir Ellis Clarke');
}
