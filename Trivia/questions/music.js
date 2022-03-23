import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function musicQuestions(category) {
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
        message: "(1/6) Who sang the 2010 hit song, 'Baby'? \n",
        choices: shuffle([
            'Usher',
            'Justin Bieber',
            'Nick Jonas',
            'Snoop Dogg',
        ]),
    });

    return handleAnswer(answers.question1 == 'Justin Bieber');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) Which singer featured on Movado's 2012 hit, 'Caribbean Girls'? \n",
        choices: shuffle([
            'Nikki Minaj',
            'Popcaan',
            'Drake',
            'Vybz Kartel',
        ]),
    });

    return handleAnswer(answers.question1 == 'Nikki Minaj');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) She was once married to Marc Anthony and is currently dating Ben Affleck \n",
        choices: shuffle([
            'Nikki Minaj',
            'Salma Hayek',
            'Jennifer Lopez',
            'Jaime King',
        ]),
    });

    return handleAnswer(answers.question1 == 'Jennifer Lopez');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) You know her 'All too well' for her 'Love Story' since she was '15' \n",
        choices: shuffle([
            'Taylor Swift',
            'Lorde',
            'Pink',
            'Adele',
        ]),
    });

    return handleAnswer(answers.question1 == 'Taylor Swift');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Which iconic country Western duo sang, 'Islands in the Stream'? \n",
        choices: shuffle([
            'Johnny Cash and Dolly Parton',
            'Willie Nelson and Faith Hill',
            'Kenny Rogers and Faith Hill',
            'Kenny Rogers and Dolly Parton',
        ]),
    });

    return handleAnswer(answers.question1 == 'Kenny Rogers and Dolly Parton');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(6/6) From 1935-1938, this Calypso King won 4 consecutive Road March crowns, once with his often sampled song, 'Netty Netty' \n",
        choices: shuffle([
            'Mighty Sparrow',
            'Lord Kitchener',
            'Roaring Lion',
            'Calypso Rose',
        ]),
    });

    return handleAnswer(answers.question1 == 'Roaring Lion');
}
