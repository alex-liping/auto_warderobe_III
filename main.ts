let jas = 0
led.enable(false)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P7, 180)
let zavreno = true
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(1000)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        if (zavreno == true) {
            pins.servoWritePin(AnalogPin.P7, 0)
            zavreno = false
            jas = 0
            for (let index = 0; index < 50; index++) {
                basic.pause(20)
                strip.setBrightness(jas)
                strip.showColor(neopixel.colors(NeoPixelColors.White))
                jas += 1
            }
            jas = 255
            strip.setBrightness(jas)
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(500)
        }
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        if (zavreno == false) {
            pins.servoWritePin(AnalogPin.P7, 180)
            jas = 50
            strip.setBrightness(jas)
            for (let index = 0; index < 50; index++) {
                basic.pause(20)
                strip.setBrightness(jas)
                strip.showColor(neopixel.colors(NeoPixelColors.White))
                jas += -1
            }
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            zavreno = true
            basic.pause(500)
        }
    }
})
