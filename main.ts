let 等待時間 = 0
input.onButtonPressed(Button.A, function () {
    ezstartkit.oled_font_size(ezstartkit.OLED_Size.size1)
    ezstartkit.oled_clear()
    ezstartkit.oled_init()
    ezstartkit.oled_showString(0, 0, "I am Ivy.")
    led.enable(true)
    等待時間 = 500
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground)
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
    ezstartkit.oled_clear()
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    led.enable(true)
    music.setBuiltInSpeakerEnabled(true)
})
basic.forever(function () {
	
})
