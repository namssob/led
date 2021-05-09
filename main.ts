let 等待時間 = 0
input.onButtonPressed(Button.A, function () {
    ezstartkit.oled_clear()
    ezstartkit.oled_init()
    ezstartkit.oled_showString(0, 0, "Button A")
    led.enable(true)
    music.setBuiltInSpeakerEnabled(false)
    等待時間 = 500
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.OnceInBackground)
    images.createImage(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `).scrollImage(1, 等待時間)
    images.createImage(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `).scrollImage(1, 200)
    images.createImage(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `).scrollImage(1, 200)
    images.createImage(`
        . # # . .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `).scrollImage(1, 200)
    images.createImage(`
        . # # . .
        . # . # .
        . # # # .
        . # . . .
        . # . . .
        `).scrollImage(1, 200)
    images.createImage(`
        . # . # .
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `).scrollImage(1, 200)
    images.createImage(`
        . . . . .
        . # # # .
        . # # # .
        # # # # #
        # # # # #
        `).scrollImage(1, 200)
    images.createImage(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `).showImage(0)
})
input.onGesture(Gesture.Shake, function () {
    led.enable(false)
    music.setBuiltInSpeakerEnabled(false)
})
input.onButtonPressed(Button.B, function () {
    led.enable(true)
    music.setBuiltInSpeakerEnabled(true)
})
basic.forever(function () {
	
})
