input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("C5 B C5 B C5 B C5 B ", 400)
    basic.showString("no")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
	
})
