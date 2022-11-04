let x = document.querySelector(`#x`)
let btn = document.querySelector(`button`)
let wynik = document.querySelector(`#wynik`)

btn.addEventListener(`click`, function () {
    wynik.innerHTML = `Wynik działania to ${Math.pow(x.value, 2)/Math.pow(1 + Math.abs(x.value), 2)}`
})