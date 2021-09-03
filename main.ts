input.onButtonPressed(Button.A, function () {
    if (note != 1) {
        note = note - 1
        basic.showString("" + (note))
    }
})
input.onSound(DetectedSound.Loud, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    if (note != 7) {
        note = note + 1
        basic.showString("" + (note))
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (note == 1) {
        music.ringTone(262)
    } else if (note == 2) {
        music.ringTone(294)
    } else if (note == 3) {
        music.ringTone(330)
    } else if (note == 4) {
        music.ringTone(349)
    } else if (note == 5) {
        music.ringTone(392)
    } else if (note == 6) {
        music.ringTone(440)
    } else {
        music.ringTone(494)
    }
})
let note = 0
note = 1
basic.showString("" + note + "do")
