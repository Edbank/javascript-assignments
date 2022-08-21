// // Dumebi's team
let teamDumebiOne = 96
let teamDumebiTwo = 108
let teamDumebiThree = 89

// // teamCiroma
let teamCiromaOne = 88
let teamCiromaTwo = 91
let teamCiromaThree = 110

// // QUESTION 1
teamDumebiAverageScore = ((teamDumebiOne + teamDumebiTwo + teamDumebiThree) / 3 )
console.log(teamDumebiAverageScore)
teamCiromasAverageScore = ((teamCiromaOne + teamCiromaTwo + teamCiromaThree) / 3)
console.log(teamCiromasAverageScore)

// // QUESTION 2

if (teamDumebiAverageScore > teamCiromasAverageScore ) {
    console.log(`teamDumebi is the winner` )
} else if (teamCiromasAverageScore > teamDumebiAverageScore) {
    console.log(`teamCiroma is the winner`)
} else if (teamCiromasAverageScore === teamDumebiAverageScore) {
    console.log(Draw)
}

// QUESTION 3 BONUS 1



// Dumebi's team
let teamDumebi1 = 97
let teamDumebi2 = 112
let teamDumebi3 = 101

// teamCiroma
let teamCiroma1 = 109
let teamCiroma2 = 95
let teamCiroma3 = 123

teamDumebiAverageScore2 = ((teamDumebi1 + teamDumebi2 + teamDumebi3) / 3 )
console.log(teamDumebiAverageScore2)
teamCiromasAverageScore2 = ((teamCiroma1 + teamCiroma2 + teamCiroma3) / 3)
console.log(teamCiromasAverageScore2)

const minimumScore = 100

if (teamDumebiAverageScore2 > teamCiromasAverageScore2 && teamDumebiAverageScore2 >= minimumScore) {
    console.log(`teamDumebi wins the trophy`)
} else if (teamCiromasAverageScore2 > teamDumebiAverageScore2 && teamCiromasAverageScore2 >= minimumScore) {
    console.log(`Team ciroma wins the trophy`)
} else {
    console.log(`No winner emerged`)
}

// QUESTION 3 BONUS 2
if (teamDumebiAverageScore2 === teamCiromasAverageScore2 && teamDumebiAverageScore2 >= minimumScore && teamCiromasAverageScore2 >= minimumScore) {
     console.log(Draw)
} else {
    `no winner`
}
   
    //  TASK2
const score = prompt(`enter your score`);

if (score >= 81 && score <= 100) {
    console.log(`A`)
}
else if(score >= 61 && score <= 80) {
    console.log(`B`)
}
else if(score >= 51 && score <= 60) {
    console.log(`C`)
}
else if(score >= 46 && score <= 50) {
    console.log(`D`)
}
else if(score >= 25 && score <= 45) {
    console.log(`E`)
}
else if(score >= 24 && score <= 0) {
    console.log(`F`)
}
else {
    console.log(`please enter a valid score`)
}

    

