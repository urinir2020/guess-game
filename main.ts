basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showString("STATIC")
    } else if (input.isGesture(Gesture.ScreenUp)) {
        basic.showString("READY?")
    } else {
        music.playMelody("- A B C5 - - - - ", 120)
    }
})
