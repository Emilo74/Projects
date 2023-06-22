import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function styleQuestions(category) {
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
        message: "(1/6) Which brand manufactures Air Jordans? \n",
        choices: shuffle([
            'Nike',
            'Puma',
            'Adidas',
            'Air',
        ]),
    });

    return handleAnswer(answers.question1 == 'Nike');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) Which former supermodel hosted AGT from 2017-2018? \n",
        choices: shuffle([
            'Tyra Banks',
            'Heidi Klum',
            'Sofía Vergara',
            'Mel B',
        ]),
    });

    return handleAnswer(answers.question1 == 'Tyra Banks');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) In the 2006 Meryl Streep film, what brand did the devil wear? \n",
        choices: shuffle([
            'Prada',
            'Nike',
            'Coach',
            'Gucci',
        ]),
    });

    return handleAnswer(answers.question1 == 'Prada');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) Which Creed actor id the brand ambassador for the fragrance Coach? \n",
        choices: shuffle([
            'Michael B. Jordan',
            'Sylvester Stallone',
            'Tessa Thompson',
            'Mark Tremonti',
        ]),
    });

    return handleAnswer(answers.question1 == 'Michael B. Jordan');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Which fashion designer and TV personality was convicted and jailed for insider trading in 2006? \n",
        choices: shuffle([
            'Martha Stewart',
            'Coco Chanel',
            'Donatella Versace',
            'Christian Dior',
        ]),
    });

    return handleAnswer(answers.question1 == 'Martha Stewart');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "input",
        message: "(6/6) Which highly sought after wedding dress designer had made wedding gowns for popular figures such as the Kardashian sisters, Victoria Beckham and Ariana Grande? ",
    });

    return handleAnswer(answers.question1.toLowerCase().includes("vera wang"));
}
