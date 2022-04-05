import chalk from 'chalk';
import inquirer from 'inquirer';
import { handleAnswer, shuffle } from '../index.js';

export async function religionQuestions(category) {
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
        message: "(1/6) Which of the following was not an apostle of Jesus Christ? \n",
        choices: shuffle([
            'Matthew',
            'Mark',
            'James',
            'Thomas',
        ]),
    });

    return handleAnswer(answers.question1 == 'Mark');
}

async function mq2(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(2/6) Who is the Hindu goddess of death? \n",
        choices: shuffle([
            'Kali',
            'Rawan',
            'Shiva',
            'Ram',
        ]),
    });

    return handleAnswer(answers.question1 == 'Kali');
}

async function mq3(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(3/6) Who is the most mentioned prophet in the Quoran? \n",
        choices: shuffle([
            'Jesus',
            'Job',
            'Ishmael',
            'Prophet Muhhamad',
        ]),
    });

    return handleAnswer(answers.question1 == 'Jesus');
}

async function mq4(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(4/6) Which country did Buddhism originate? \n",
        choices: shuffle([
            'India',
            'Sri Lanka',
            'China',
            'Bhutan',
        ]),
    });

    return handleAnswer(answers.question1 == 'India');
}

async function mq5(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "(5/6) What island nation did Ram visit to rescue Sita? \n",
        choices: shuffle([
            'India',
            'Sri Lanka',
            'Nepal',
            'Tobago',
        ]),
    });

    return handleAnswer(answers.question1 == 'Sri Lanka');
}

async function mq6(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "input",
        message: "(6/6) In Christianity, the 7 deadly sins are: lust, greed, gluttony, envy, wrath, pride and _____? ",
    });

    return handleAnswer(answers.question1.toLowerCase().includes("sloth"));
}
