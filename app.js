function rain() {
    let amount = 50

    for(let i = 0; i < amount; i++) {
        let size = Math.random() * 5
        let position = Math.random() * window.innerWidth
        let delay = Math.random() * -20
        let duration = Math.random() * 5

        let drop = document.createElement('i')
        drop.style.width = size+'px'
        drop.style.left = position+'px'
        drop.style.animationDelay = delay+'s'
        drop.style.animationDuration = 1+duration+'s'

        let body = document.querySelector('body')
        body.appendChild(drop)
    }
}

rain()