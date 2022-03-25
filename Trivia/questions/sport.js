import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function sportQuestions(category) {
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
        message: "(1/6) What popular dish is most famously found at Maracas beach? \n",
        choices: shuffle([
            'Bake and Shark',
            'Pelau',
            'Doubles',
            'Roti',
        ]),
    });

    return handleAnswer(answers.question1 == 'Bake and Shark');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) What is the most commonly salted fish sold in T&T? \n",
        choices: shuffle([
            'Cod',
            'Carite',
            'Salmon',
            'Tilapia',
        ]),
    });

    return handleAnswer(answers.question1 == 'Cod');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) What breed of duck is most commonly cooked in T&T and is highly valued for its sweet taste and tough texture? \n",
        choices: shuffle([
            'Muscovy',
            'Pekin',
            'Black-bellied whistling-duck',
            'Local duck',
        ]),
    });

    return handleAnswer(answers.question1 == 'Muscovy');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) This local choka is commonly made by combining roasted bhigan, ochroes, tomatoes and hot peppers. \n",
        choices: shuffle([
            'Murtani',
            'Mother-in-law',
            'Bhigan choka',
            'Cassareep',
        ]),
    });

    return handleAnswer(answers.question1 == 'Murtani');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) Which commonly consumed starch, if not properly prepared, can lead to fatal cyanide poisoning? \n",
        choices: shuffle([
            'Cassava',
            'Sweet potato',
            'Potato',
            'Eddoes',
        ]),
    });

    return handleAnswer(answers.question1 == 'Cassava');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(6/6) What well seasoned, peppery lagoon rice dish is famously cooked at river limes across T&T? \n",
        choices: shuffle([
            'Gildabaat',
            'Pelau',
            'Pepper rice',
            'Jambalaya',
        ]),
    });

    return handleAnswer(answers.question1 == 'Gildabaat');
}
