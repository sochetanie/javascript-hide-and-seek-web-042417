function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  var list = document.querySelectorAll(".ranked-list")
  list.forEach((el) => {
    el.innerHTML = parseInt(el.innerHTML) + n
  })
}

function deepestChild () {
  return document.querySelector('#grand-node > div > div > div > div')
}
