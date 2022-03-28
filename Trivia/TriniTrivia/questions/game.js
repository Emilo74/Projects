import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function gameQuestions(category) {
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
        message: "(1/6) Who is MArio's brother? \n",
        choices: shuffle([
            'Luigi',
            'Bowser',
            'Waluigi',
            'Toad',
        ]),
    });

    return handleAnswer(answers.question1 == 'Luigi');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) In Street Fighter, which country is Blanka from? \n",
        choices: shuffle([
            'Brazil',
            'Japan',
            'China',
            'Chile',
        ]),
    });

    return handleAnswer(answers.question1 == 'Brazil');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) Which video game company is publishing the Far Cry series? \n",
        choices: shuffle([
            'Ubisoft',
            'Activision Blizzard',
            'Sega',
            'Bethesda Softworks',
        ]),
    });

    return handleAnswer(answers.question1 == 'Ubisoft');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) In Minecraft, what materials are needed to make obsidian? \n",
        choices: shuffle([
            'Water and Lava',
            'Water and Clay',
            'Coal and Clay',
            'Coal and Lava',
        ]),
    });

    return handleAnswer(answers.question1 == 'Water and Lava');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) What was the first hand-held console with cartridges produces by Nintendo? \n",
        choices: shuffle([
            'Game Boy',
            'Game and Watch',
            'Nintendo 64',
            'Nintendo DS',
        ]),
    });

    return handleAnswer(answers.question1 == 'Game Boy');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "input",
        message: "(3/6) Produced by Nutting Associates, what is the first commercial arcade video game? ",
    });

    return handleAnswer(answers.question1.toLowerCase().includes("computer space"));
}
