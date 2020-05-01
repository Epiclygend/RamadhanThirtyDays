const
    canvas = document.querySelector('div#canvas'),
    exitFull = document.querySelector('span#exitFull')


function play(e, canvas, animationInstance) {
    if (!(e.target === exitFull)) {
        animationInstance.play()
        canvas.requestFullscreen()
    }
}

canvas.addEventListener('click', e => play(e, canvas, animate))
exitFull.addEventListener('click', () => document.exitFullscreen())

animate.add({
    targets: '#exitFull',
    translateY: '-10%',
    opacity: [0,1],
    delay: 5000
})