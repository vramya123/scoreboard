let homeScoreEle = document.getElementById("score_home")
let guestScoreEle = document.getElementById("score_guest")
let homeScore = 0
let guestScore = 0

function incrementHSBy1(){
    homeScore += 1
    homeScoreEle.textContent = homeScore
}

function incrementHSBy2(){
    homeScore += 2
    homeScoreEle.textContent = homeScore
}

function incrementHSBy3(){
    homeScore += 3
    homeScoreEle.textContent = homeScore
}


function incrementGSBy1(){
    guestScore += 1
    guestScoreEle.textContent = guestScore
}

function incrementGSBy2(){
    guestScore += 2
    guestScoreEle.textContent = guestScore
}

function incrementGSBy3(){
    guestScore += 3
    guestScoreEle.textContent = guestScore
}