import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function seriesQuestions(category) {
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
        message: "(1/6) What rapper starred in a sitcom which ran for 6 seasons that is loosely based on his life? \n",
        choices: shuffle([
            'Will Smith',
            'Jamie Foxx',
            'Martin Lawrence',
            'Kanye West',
        ]),
    });

    return handleAnswer(answers.question1 == 'Will Smith');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) Tom Ellis plays the main character on this Warner Bros. production as seen on Netflix and Fox \n",
        choices: shuffle([
            'Lucifer',
            'Thomas Shelby',
            '11',
            'Pablo Escobar',
        ]),
    });

    return handleAnswer(answers.question1 == 'Lucifer');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) Jaleel White starred as which character in the Family Matters sitcom? \n",
        choices: shuffle([
            'Steve Urkel',
            'Carl Otis Winslow',
            'Waldo Geraldo Faldo',
            'Jerry Jamal Jameson',
        ]),
    });

    return handleAnswer(answers.question1 == 'Steve Urkel');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) Which Big Bang Theory cast member starred in the 80's sitcom, 'Blossom'? \n",
        choices: shuffle([
            'Mayim Bialik',
            'Kaley Cuoco',
            'Melissa Rauch',
            'Jim Parsons',
        ]),
    });

    return handleAnswer(answers.question1 == 'Mayim Bialik');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Name the boat from 'Gilligan's Island \n",
        choices: shuffle([
            'S.S. Minnow',
            'Titanic',
            'Grace',
            'Freedm',
        ]),
    });

    return handleAnswer(answers.question1 == 'S.S. Minnow');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(6/6) The CSI franchise is based on 4 major US locations, which of the following is NOT one of them? \n",
        choices: shuffle([
            'Los Angeles',
            'Washington D.C',
            'Miami',
            'Las Vegas',
        ]),
    });

    return handleAnswer(answers.question1 == 'Los Angeles');
}
