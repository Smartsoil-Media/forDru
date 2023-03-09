const btnEl = document.getElementById('button')
const answerEl = document.getElementById('answer-el')


btnEl.addEventListener('click', function() {
    let randomnNumber = Math.floor(Math.random() * 20)
    if (randomnNumber <= 10) {
        answerEl.innerText = randomnNumber + " | " + "dru can touch the fish"
        answerEl.style.color = "green"
    } else {
        answerEl.innerText = randomnNumber + " | " +  "don't you touch that fish"
        answerEl.style.color = "red"
    }

})








