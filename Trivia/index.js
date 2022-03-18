#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "Welcome to my Trivia Game \n"
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}

    1) Use arrow keys to select a category
    2) Answer all six (6) questions from the category
    
    Win 5 categories to win $1,000,000 and reveal a secret message.

    If you get any questions wrong ${chalk.bgRed("THE GAME IS OVER!!!")}

    `)
}

async function askName() {
    const answers = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "What is your name?",
        default() {
            return "Player";
        },
    });

    playerName = answers.player_name;
}

async function handleCategory(category) {
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    if (category === "Rel Lyrics") {
        await musicQuestions(category);
    }
    // else if (category === "Popcorn and Soda"){
    //     await movieQuestions(category);
    // }
    // else if (category === "Belly Full"){
    //     await foodQuestions(category);
    // }
    // else if (category === "U iz ah Trini"){
    //     await triniQuestions(category);
    // }
    // else if (category === "Sport Talk"){
    //     await sportQuestions(category);
    // }
    // else if (category === "Tech Talk"){
    //     await techQuestions(category);
    // }
    // else if (category === "Console Me"){
    //     await gameQuestions(category);
    // }
    // else if (category === "Yuh Feel Yuh Brite"){
    //     await generalQuestions(category);
    // }
    // else if (category === "Hi Style"){
    //     await styleQuestions(category);
    // }
    // else if (category === "Couch Potato"){
    //     await seriesQuestions(category);
    // }
    // else if (category === "Bring Back d Ole Time Days"){
    //     await tbQuestions(category);
    // }
    // else if (category === "Divine Intervention"){
    //     await religionQuestions(category);
    // }
    // else if (category === "Kid's Play"){
    //     await kidsQuestions(category);
    // }
}

async function chooseCategory() {
    let categories = ["Rel Lyrics", "Popcorn and Soda", "Belly Full", "U iz ah Trini", "Sport Talk", "Tech Talk", "Console Me", "Yuh Feel Yuh Brite", "Hi Style", "Couch Potato", "Bring Back d Ole Time Days", "Divine Intervention", "Kid's Play"]
    var count = 1;

    while (categories.length > 8) {
        if (count > 1) {
            console.log(`${chalk.bgBlue("Category won!! Keep up the good work \n")}`);
        }
        const answer = await inquirer.prompt({
            name: "category",
            type: "list",
            message: `\n (${count}/5) Please select a category: (1 of ${categories.length}) \n`,
            choices: categories,
        });

        categories = categories.filter(function(value, index, arr){ 
            return value != answer.category;
        });

        count += 1;
        await handleCategory(answer.category);
    }
    return;
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({text: `Nice work ${playerName}. That's a legit answer! \n`});
        return;
    }
    else {
        spinner.error({text: `Sighh Game over, you lose ${playerName}! \n`})
        process.exit(1)
    }
}

async function musicQuestions(category) {
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
        message: "Who sang the 2010 hit song, 'Baby'? \n",
        choices: [
            'Usher',
            'Justin Bieber',
            'Nick Jonas',
            'Snoop Dogg',
        ],
    });

    return handleAnswer(answers.question1 == 'Justin Bieber');
}

async function mq2(category) {
    console.clear()
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "Which singer featured on Movado's 2012 hit, 'Caribbean Girls'? \n",
        choices: [
            'Nikki Minaj',
            'Popcaan',
            'Drake',
            'Vybz Kartel',
        ],
    });

    return handleAnswer(answers.question1 == 'Nikki Minaj');
}

async function mq3(category) {
    console.clear()
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "She was once married to Marc Anthony and is currently dating Ben Affleck \n",
        choices: [
            'Nikki Minaj',
            'Salma Hayek',
            'Jennifer Lopez',
            'Jaime King',
        ],
    });

    return handleAnswer(answers.question1 == 'Jennifer Lopez');
}

async function mq4(category) {
    console.clear()
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "You know her 'All too well' for her 'Love Story' since she was '15' \n",
        choices: [
            'Taylor Swift',
            'Lorde',
            'Pink',
            'Adele',
        ],
    });

    return handleAnswer(answers.question1 == 'Taylor Swift');
}

async function mq5(category) {
    console.clear()
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "Which iconic country Western duo sang, 'Islands in the Stream'? \n",
        choices: [
            'Johnny Cash and Dolly Parton',
            'Willie Nelson and Faith Hill',
            'Kenny Rogers and Faith Hill',
            'Kenny Rogers and Dolly Parton',
        ],
    });

    return handleAnswer(answers.question1 == 'Kenny Rogers and Dolly Parton');
}

async function mq6(category) {
    console.clear()
    console.log(`\n Category: ${chalk.bgGreenBright(category)} \n`);

    const answers = await inquirer.prompt({
        name: "question1",
        type: "list",
        message: "From 1935-1938, this Calypso King won 4 consecutive Road March crowns, once with his often sampled song, 'Netty Netty' \n",
        choices: [
            'Mighty Sparrow',
            'Lord Kitchener',
            'Roaring Lion',
            'Calypso Rose',
        ],
    });

    return handleAnswer(answers.question1 == 'Roaring Lion');
}

function winner() {
    console.clear();
    const msg = `Congratulations ${playerName} !!! \n You win $ 1 , 0 0 0 , 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    })
}


await welcome();
await askName();
await chooseCategory();
winner();
