let 等待時間 = 0
input.onButtonPressed(Button.A, function () {
    等待時間 = 2000
    led.enable(true)
    images.createImage(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `).showImage(0, 等待時間)
    images.createImage(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `).showImage(0, 等待時間)
    images.createImage(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `).showImage(0, 等待時間)
    images.createImage(`
        # # . . .
        # # . . .
        # # . . .
        # # # # #
        # # # # #
        `).showImage(0, 等待時間)
    images.createImage(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `).showImage(0, 等待時間)
    if (true) {
    	
    }
})
basic.forever(function () {
	
})
