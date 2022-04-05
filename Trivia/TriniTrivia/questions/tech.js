import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function techQuestions(category) {
    await mq1(category);
    await mq2(category);
    await mq6(category);
    await mq4(category);
    await mq5(category);
    await mq3(category);
}

async function mq1(category) {
    console.clear()
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(1/6) What does the acronym LAN stand for? \n",
        choices: shuffle([
            'Local Area Network',
            'Local Access Network',
            'Logical Access Network',
            'Logical Area Network',
        ]),
    });

    return handleAnswer(answers.question1 == 'Local Area Network');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) Which popular company designed the first CPU? \n",
        choices: shuffle([
            'Intel',
            'Zhaoxin',
            'AMD',
            'Nvidia',
        ]),
    });

    return handleAnswer(answers.question1 == 'Intel');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "input",
        message: "(6/6) What does the acronym BASH stand for? ",
    });

    return handleAnswer(answers.question1.toLowerCase().includes("bourne again shell"));
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) Which 2 people co-founded Apple Inc. in 1977 \n",
        choices: shuffle([
            'Steve Jobs and Steve Wosniak',
            'Steve Jobs and Tim Cook',
            'Tim Cook and Steve Wosniak',
            'Bill Gates and Tim Cook',
        ]),
    });

    return handleAnswer(answers.question1 == 'Steve Jobs and Steve Wosniak');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Who invented the C programming language? \n",
        choices: shuffle([
            'Dennis Ritchie',
            'Ken Thompson',
            'Bjarne Stroustrup',
            'Linus Torvalds',
        ]),
    });

    return handleAnswer(answers.question1 == 'Dennis Ritchie');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) What is Elon Musk's youngest son's name? \n",
        choices: shuffle([
            'X Æ A-Xii',
            'Xavier Musk',
            'Damian Musk',
            'Elon Musk Jr.',
        ]),
    });

    return handleAnswer(answers.question1 == 'X Æ A-Xii');
}
