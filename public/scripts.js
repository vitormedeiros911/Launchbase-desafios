var hideIngridient = document.querySelector("#hide-ingredients")
var hidePrep = document.querySelector("#hide-prepare-mode")
var hideInfo = document.querySelector("#hide-info")

var info = document.querySelector("#info")
var ingridients = document.querySelector("#ingredients")
var prep = document.querySelector("#prep")

hideIngridient.addEventListener('click', () => {
  if (ingridients.style.display == "block") {
    ingridients.style.display = "none"
  } else {
    ingridients.style.display = "block"
  }
})

hidePrep.addEventListener('click', () => {
  if (prep.style.display == "block") {
    prep.style.display = "none"
  } else {
    prep.style.display = "block"
  }
})

hideInfo.addEventListener('click', () => {
  if (info.style.display == "block") {
    info.style.display = "none"
  } else {
    info.style.display = "block"
  }
})
