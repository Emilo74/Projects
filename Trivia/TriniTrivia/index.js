#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from'figlet';
import { createSpinner } from 'nanospinner';
import {musicQuestions} from "./questions/music.js";
import {movieQuestions} from "./questions/movies.js";
import {foodQuestions} from "./questions/food.js";
import {triniQuestions} from "./questions/trini.js";
import {sportQuestions} from "./questions/sport.js";
import {techQuestions} from "./questions/tech.js";
import {gameQuestions} from "./questions/game.js";
import {generalQuestions} from "./questions/general.js";
import {styleQuestions} from "./questions/style.js";
import {seriesQuestions} from "./questions/series.js";
import {tbQuestions} from "./questions/tb.js";
import {religionQuestions} from "./questions/religion.js";
import {kidsQuestions} from "./questions/kids.js";

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    console.clear();
    const rainbowTitle = chalkAnimation.rainbow(
        "\n Welcome to my Trivia Game :)  \n"
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue("HOW TO PLAY")}

    1) Use arrow keys to select a category
    2) Answer all six (6) questions from the category

    ${chalk.bgGreen("Tips: ")} 
          Categories with (T) have some Trini related questions
          Categories with (TT) are heavily focused on Trini history/culture        

    
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

    if (category === "Rel Lyrics (T)") {
        await musicQuestions(category);
    }
    else if (category === "Popcorn and Soda"){
        await movieQuestions(category);
    }
    else if (category === "Belly Full (TT)"){
        await foodQuestions(category);
    }
    else if (category === "U iz ah Trini (TT)"){
        await triniQuestions(category);
    }
    else if (category === "Sport Talk"){
        await sportQuestions(category);
    }
    else if (category === "Tech Talk"){
        await techQuestions(category);
    }
    else if (category === "Console Me"){
        await gameQuestions(category);
    }
    else if (category === "Yuh Feel Yuh Brite (T)"){
        await generalQuestions(category);
    }
    else if (category === "Hi Style"){
        await styleQuestions(category);
    }
    else if (category === "Couch Potato"){
        await seriesQuestions(category);
    }
    else if (category === "Bring Back d Ole Time Days (TT)"){
        await tbQuestions(category);
    }
    else if (category === "Divine Intervention"){
        await religionQuestions(category);
    }
    else if (category === "Kid's Play"){
        await kidsQuestions(category);
    }
}

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

async function chooseCategory() {
    var categories = shuffle(["Rel Lyrics (T)", "Popcorn and Soda", "Belly Full (TT)", "U iz ah Trini (TT)", "Sport Talk", "Tech Talk", "Console Me", "Yuh Feel Yuh Brite (T)", "Hi Style", 
    "Couch Potato", "Bring Back d Ole Time Days (TT)", "Divine Intervention", "Kid's Play"]);
    var count = 1;

    while (categories.length > 8) {
        if (count > 1) {
            console.log(`${chalk.bgBlue("Category won!! Keep up the good work \n")}`);
        }
        const answer = await inquirer.prompt({
            name: "category",
            type: "list",
            message: `\n (${count}/5) Please select a category: (${categories.length} possible choices) \n`,
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

export async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();

    if (isCorrect) {
        console.clear();
        spinner.success({text: `Nice work ${playerName}. That's a great answer! \n`});
        return;
    }
    else {
        spinner.error({text: `Sighh Game over, you lose ${playerName}! \n`})
        printSocials();
        process.exit(1)
    }
}

function winner() {
    console.clear();
    const msg = `Congratulations ${playerName} !!! \n You win $ 1 , 0 0 0 , 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    })

    printSocials();

    console.log("Comment this under my Youtube video for a chance to be featured in my next video: ");
    console.log(`${chalk.bgBlue("\nJavascript is super easy and fun to learn!")}`)
}

function printSocials() {
    console.log("If you enjoyed the game, please follow me @ my links below \n");
    console.log('\u2620', '\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620\n');
    console.log(`${chalk.bgRed("Youtube:")} https://www.youtube.com/channel/UCLdUmrSopaV5wYIuuercITQ`);
    console.log(`${chalk.bgBlue("LinkedIn:")} https://www.linkedin.com/in/emilo-gopaul-9246201aa/`);
    console.log(`${chalk.bgBlack("Github:")} https://github.com/Emilo74`);
    console.log(`${chalk.bgGreen("Personal Website:")} https://emilo74.github.io/`);
    console.log('\n \u2620', '\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620','\u2620\n');
}


await welcome();
await askName();
await chooseCategory();
winner();
