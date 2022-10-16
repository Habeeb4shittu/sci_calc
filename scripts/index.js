var input = document.querySelector(".inputfield");
var equals = document.querySelector(".equals")
var del = document.querySelector(".del")
var overlay = document.querySelector(".overlay")
var advanced = document.querySelector(".advanced")
var angle = document.querySelector(".angle")
var sin = document.querySelector(".sin")
var cos = document.querySelector(".cos")
var tan = document.querySelector(".tan")
var sqrt = document.querySelector(".sqrt")
var square = document.querySelector(".square")
var cube = document.querySelector(".cube")
var cubert = document.querySelector(".cubert")
var logger = document.querySelector(".log")
var pie = document.querySelector(".pi")
var body = document.querySelector("body")
var round = document.querySelector(".round")
var butts = new Array();
butts = document.querySelectorAll("button");
equals.addEventListener("click", function () {
    input.value = eval(input.value)
})
// del.addEventListener("click", function () {
//
// })
sin.addEventListener("click", function () {
    input.value = Math.sin(parseFloat(input.value))
})
cos.addEventListener("click", function () {
    input.value = Math.cos(input.value)
})
tan.addEventListener("click", function () {
    input.value = Math.tan(input.value)
})
sqrt.addEventListener("click", function () {
    input.value = Math.sqrt(input.value)
})
square.addEventListener("click", function () {
    input.value = Math.pow(input.value, 2)
})
cube.addEventListener("click", function () {
    input.value = Math.pow(input.value, 3)
})
cubert.addEventListener("click", function () {
    input.value = Math.cbrt(input.value)
})
logger.addEventListener("click", function () {
    input.value = Math.log10(input.value)
})
pie.addEventListener("click", function () {
    input.value = Math.PI * input.value
})
round.addEventListener("click", function () {
    input.value = Math.round(input.value)
})
del.addEventListener("click", function () {
    input.value = input.value.slice(0, -1)
})
