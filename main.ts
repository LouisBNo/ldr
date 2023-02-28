let PO_TIJD6 = 0
let PO_TIJD5 = 0
let PO_TIJD4 = 0
let PO_TIJD3 = 0
let PO_TIJD2 = 0
let PO_tijd1 = 0
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
let toestand = 1
basic.pause(100)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 250) {
        PO_tijd1 = input.runningTime()
        basic.showIcon(IconNames.Heart)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 250) {
        PO_TIJD2 = input.runningTime()
        basic.showIcon(IconNames.SmallHeart)
    }
    if (pins.analogReadPin(AnalogPin.P1) < 250) {
        PO_TIJD3 = input.runningTime()
        basic.showIcon(IconNames.Yes)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 250) {
        PO_TIJD4 = input.runningTime()
        basic.showIcon(IconNames.No)
    }
    if (pins.analogReadPin(AnalogPin.P2) < 250) {
        PO_TIJD5 = input.runningTime()
        basic.showIcon(IconNames.Happy)
    }
    if (pins.analogReadPin(AnalogPin.P2) > 250) {
        PO_TIJD6 = input.runningTime()
        basic.showIcon(IconNames.Sad)
    }
})
