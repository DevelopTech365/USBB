input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . # .
        . # . . #
        . . . . #
        . # . . #
        . . . # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # . . # .
        # . . . .
        # . . # .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("The sun is shining")
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . # . .
        . # # # .
        . . # . #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . # . #
        . # # # .
        # . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . # . .
        . # # # #
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # . .
        . # # # #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        . # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showString("Hello!")
datalogger.log(
datalogger.createCV("5", 1),
datalogger.createCV("5", 2),
datalogger.createCV("5", 3),
datalogger.createCV("5", 4),
datalogger.createCV("5", 5)
)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Surprised)
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.StickFigure)
basic.showLeds(`
    # . # . .
    . # # # .
    . . # . #
    . # . # .
    # . . . #
    `)
basic.showIcon(IconNames.StickFigure)
basic.showLeds(`
    . . . . .
    . # # # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . # #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . # # #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . # . #
    # . . # #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . # . #
    # . # . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # . # . #
    # # . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . . . #
    # # # . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # # . . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . . . . #
    . . . . #
    . . . . #
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . . . # .
    . . . # #
    . . . # .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . . # . #
    . . # # #
    . . # . #
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . # . # .
    . # # # .
    . # . # .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    # . # . #
    # # # . .
    # . # . #
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . # . # #
    # # . . #
    . # . # #
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    # . # # #
    # . . # .
    # . # # #
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . # # # .
    . . # . .
    . # # # .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    # # # . .
    . # . . .
    # # # . .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    # # . . .
    # . . . .
    # # . . .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    # . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    # . . . #
    . # # # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Press Any Buttons (A And/or B).")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
