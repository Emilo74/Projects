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
        message: "(1/6) Which franchise does Iron Man and Thor belong to? \n",
        choices: shuffle([
            'Marvel Cinematic Universe',
            'DC',
            'Star Trek Verse',
            'Buffyverse',
        ]),
    });

    return handleAnswer(answers.question1 == 'Marvel Cinematic Universe');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) Which movie trilogy stars Will Smith and Martin Lawrence as detectives? \n",
        choices: shuffle([
            'Bad Boys',
            'True Detective',
            'Austin Powers',
            'Friday',
        ]),
    });

    return handleAnswer(answers.question1 == 'Bad Boys');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) Who are the lead actors in the movie Titanic? \n",
        choices: shuffle([
            'Leonardo DiCaprio and Kate Winslet',
            'Chris Evans and Margot Robbie',
            'Leonardo DiCaprio and Margot Robbie',
            'Chris Evans and Kate Winslet',
        ]),
    });

    return handleAnswer(answers.question1 == 'Leonardo DiCaprio and Kate Winslet');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) Who played the singer Salena in a movie based on her life? \n",
        choices: shuffle([
            'Jennifer Lopez',
            'Salena Quintanilla Pérez',
            'Anne Hathaway',
            'Diane Keaton',
        ]),
    });

    return handleAnswer(answers.question1 == 'Jennifer Lopez');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Which lead actor starred with Whitney Houston in the movie Bodyguard? \n",
        choices: shuffle([
            'Kevin Costner',
            'Bruce Willis',
            'Robert Downey Jr.',
            'Natalie Portman',
        ]),
    });

    return handleAnswer(answers.question1 == 'Kevin Costner');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(6/6) What is the name of the actor who played Spock in /Star Trek: The Original Series' \n",
        choices: shuffle([
            'Leonard Nimoy',
            'William Shatner',
            'Mark Lenard',
            'James Doohan',
        ]),
    });

    return handleAnswer(answers.question1 == 'Leonard Nimoy');
}
