let winner = Math.floor(Math.random()*100);
console.log(winner);

// document.querySelector('input').addEventListener('change', () => {
//     let userInput = document.querySelector('#userInput1').value;
//     console.log(document.querySelector('#userInput1').value);
//     console.log(typeof Number(userInput));
//     let num = Number(userInput);
//     console.log(num);
//     if(num<1 || num>100 || !num){
//         return document.querySelector('#banner').innerHTML = "ð¤¦ð¼ââï¸ Don't be silly. Please choose a number between 1 and 100."
//     }
//     // else if(num === winner){
//     //     return document.querySelector('#banner').innerHTML = "You won! Congratulations, you smart cookie.ðª"
//     // }
//     else if(num<winner){
//         return document.querySelector('#banner').innerHTML = "You'll need a higher number if you want to win..."
//     }
//     else if(num>winner){
//         return document.querySelector('#banner').innerHTML = "You'll need a lower number if you want to win..."
//     }
// });


//guess count =0
//if guess count is more than 5 return "you lose" or something
//if guess count is less than 5 && userinput is valid number evaluate number if wiunning number
//pull user input into guess div return #bannerhtml

//if userinput is not win number
//pull userinput into guess div return innerHTML more

//if userinput is not win number
//pull userinput into guess div return innerHTML less

let guessCount=0;
document.querySelector('input').addEventListener('change', () => {
    let userInput = document.querySelector('#userInput1').value;
    console.log("The input value is " + document.querySelector('#userInput1').value);
    let num = Number(userInput);
    //let htmlBanner = document.querySelector('#banner').innerHTML;
    
    if(num<1 || num>100 || !num){
        return document.querySelector('#banner').innerHTML = "ð¤¦ð¼ââï¸ Don't be silly. Please choose a number between 1 and 100."
    }
    //âconsole.log(document.querySelector('#feedback-box').children);
    //âconsole.log(document.querySelector('#feedback-box').children[0]);
    document.querySelector('#feedback-box').children[guessCount].innerHTML = document.querySelector('#userInput1').value;
    guessCount++;

    let difference = num - winner;
    
    console.log(`The difference is` + difference);
    console.log("this is guess count " + guessCount);
    //if difference is beyond -20, bannerize guess higher AND way, way off
    //if difference is beyond -10, bannerize guess higher AND way off

    if (guessCount>5){
        return document.querySelector('#banner').innerHTML = "ðSorry.ð You're out of guesses, bro... which means: Yâ ï¸U Lâ ï¸SE"
    }
    else if(guessCount<6 && difference === 0){
        return document.querySelector('#banner').innerHTML = "You won! Congratulations, you smart cookie.ðª"
    }
    else if (guessCount<=5) {
        if (Math.abs(difference) <= 3){
            document.querySelector('#banner').innerHTML = "ð¥ð¥ð¥REAL close, muchachoð¥ð¥ð¥"
            if(difference > 0){
                document.querySelector('#banner').innerHTML += "You need to go a littleee lower. ð"
            }
            else if(difference < 0){
                document.querySelector('#banner').innerHTML += "You need to go a littleee higher. ð"
            }
        }
        if (Math.abs(difference) > 3 && Math.abs(difference) <= 10){
            document.querySelector('#banner').innerHTML = "ð¥close, muchacho.ð¥"
            if(difference > 0){
                document.querySelector('#banner').innerHTML += " You need to guess lower."
            }
            else if(difference < 0){
                document.querySelector('#banner').innerHTML += " You need to guess higher."
            }
        }
        if (Math.abs(difference) > 10 && Math.abs(difference) <= 20){
            document.querySelector('#banner').innerHTML = "âï¸way off, bruh.âï¸"
            if(difference > 0){
                document.querySelector('#banner').innerHTML += " You need to guess lower."
            }
            else if(difference < 0){
                document.querySelector('#banner').innerHTML += " You need to guess higher."
            }
        }
        if (Math.abs(difference) > 20){
            document.querySelector('#banner').innerHTML = "âï¸âï¸âï¸way, WAY off, broski.âï¸âï¸âï¸"
            if(difference > 0){
                document.querySelector('#banner').innerHTML += " You need to guess lower."
            }
            else if(difference < 0){
                document.querySelector('#banner').innerHTML += " You need to guess higher."
            }
        }
    }
})



/*NOTES:

//const inputEle = document.querySelector('input');
//let userInput = document.body.querySelector('#userInput1').value;
//console.log(userInput);
//console.log(userInput1);
//console.log(userInput.typeof);
//console.log(userInput1.typeof);
*/