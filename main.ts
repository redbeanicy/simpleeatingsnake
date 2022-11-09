input.onGesture(Gesture.LogoUp, function () {
    toRight = false
    toLeft = false
    toUp = false
    toDown = true
})
input.onGesture(Gesture.TiltLeft, function () {
    toRight = false
    toLeft = true
    toUp = false
    toDown = false
})
input.onGesture(Gesture.TiltRight, function () {
    toRight = true
    toLeft = false
    toUp = false
    toDown = false
})
input.onGesture(Gesture.LogoDown, function () {
    toRight = false
    toLeft = false
    toUp = true
    toDown = false
})
let toDown = false
let toUp = false
let toLeft = false
let toRight = false
let myX = 2
let myY = 2
let foodX = randint(0, 4)
let foodY = randint(0, 4)
led.plot(foodX, foodY)
basic.forever(function () {
    led.plot(myX, myY)
    if (toLeft == true) {
        if (myX > 0) {
            led.unplot(myX, myY)
            myX += -1
            led.plot(myX, myY)
            basic.pause(500)
        }
    } else if (toRight == true) {
        if (myX < 4) {
            led.unplot(myX, myY)
            myX += 1
            led.plot(myX, myY)
            basic.pause(500)
        }
    } else if (toUp == true) {
        if (myY > 0) {
            led.unplot(myX, myY)
            myY += -1
            led.plot(myX, myY)
            basic.pause(500)
        }
    } else if (toDown == true) {
        if (myY < 4) {
            led.unplot(myX, myY)
            myY += 1
            led.plot(myX, myY)
            basic.pause(500)
        }
    }
    if (foodX == myX && foodY == myY) {
        led.unplot(foodX, foodY)
        foodX = randint(0, 4)
        foodY = randint(0, 4)
        led.plot(foodX, foodY)
    }
})
