input.onButtonPressed(Button.A, function () {
    temps = input.runningTime() / 1000
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(nombre_de_pas)
    basic.pause(2000)
    basic.showNumber(temps / 1000)
    basic.pause(2000)
})
input.onGesture(Gesture.Shake, function () {
    nombre_de_pas += 1
})
let vitesse = 0
let temps = 0
let nombre_de_pas = 0
nombre_de_pas = 0
radio.setGroup(88)
basic.forever(function () {
    vitesse = nombre_de_pas / temps
    radio.sendValue("X", nombre_de_pas)
})
