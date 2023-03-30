let sightWordsArray = [
  "I", "a", "the", "see", "and", "can", "me", "is", "we", "are",
  "you", "she", "he", "can’t", "isn’t", "to", "get", "no", "yes",
  "down", "go", "where", "my", "by", "here", "saw", "they", "was",
  "little", "put", "what", "do", "like", "have", "home", "said",
  "of", "his", "her", "some", "come", "out", "say", "says", "so",
  "make", "be", "there", "look", "good", "from", "want", "water",
  "for", "again", "many", "people", "were", "very", "your"
]

let previousWords = []
let counterTotal = sightWordsArray.length
let currentCount = 0

const sightWord = document.querySelector('.sight-word')
const counter = document.querySelector('.counter')
const counterWrapper = document.querySelector('.counter-wrapper')

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const updateCounter = () => {
  currentCount++
  counter.innerHTML = `${currentCount}/${counterTotal}`
  if(currentCount <= 5) {
    counterWrapper.style.outline = "2px solid var(--red)"
  } else if(currentCount <= 10) {
    counterWrapper.style.outline = "2px solid var(--yellow)"
  } else if(currentCount <= 15) {
    counterWrapper.style.outline = "3px solid var(--green)"
  } else if(currentCount <= 20) {
    counterWrapper.style.outline = "4px solid var(--green)"
  } else if(currentCount <= 25) {
    counterWrapper.style.boxShadow = "0 0 10px var(--green)"
  } else if(currentCount <= 30) {
    counterWrapper.style.boxShadow = "0 0 20px var(--cyan)"
  }
}

const getFirstWord = () => {
  let index = getRndInteger(0, sightWordsArray.length - 1)
  let splitWord = sightWordsArray[index].split('')
  let rejoinedWord = splitWord.join(`</span><span class="grow letter-block">`)
  sightWord.innerHTML = `<span class="grow letter-block">${rejoinedWord}</span>`
  previousWords.push(sightWordsArray[index])
  sightWordsArray.splice(index, 1)
}

const getNewWord = () => {
  let index = getRndInteger(0, sightWordsArray.length - 1)
  let splitWord = sightWordsArray[index].split('')
  let rejoinedWord = splitWord.join(`</span><span class="grow letter-block">`)
  sightWord.innerHTML = `<span class="grow letter-block">${rejoinedWord}</span>`
  previousWords.push(sightWordsArray[index])
  sightWordsArray.splice(index, 1)

  updateCounter()
}

const getPreviousWord = () => {
  let index = 1
  sightWord.innerHTML = previousWords.at( -(index + 1))
}

getFirstWord()

// sightWord.innerHTML = getFirstWord()

counter.innerHTML = `${currentCount}/${counterTotal}`


// --- Canvas ---
// const c = document.getElementById("canvas")
// const ctx = c.getContext("2d")

// ctx.canvas.width  = window.innerWidth
// ctx.canvas.height = window.innerHeight / 2

// const midHeight = window.innerHeight / 4
// const midWidth = window.innerWidth / 2

// ctx.moveTo(0, 0)
// ctx.lineTo(window.innerWidth, window.innerHeight / 2)
// ctx.stroke()

// ctx.fillStyle = "#ff5555";
// ctx.font = "italic bold "+64+"pt Arial ";
// ctx.textAlign = "center"
// ctx.fillText("LEVEL UP", midWidth, midHeight);