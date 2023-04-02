document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const donut = document.createElement('div')
    let donutLeftSpace = 50
    let donutbottomspace = 150 
    let platformcount = 5
    let isgameover = false

    class Platform {
        constructor(newplatbottom) {
            this.bottom = newplatbottom
            this.left = Math.random() * 315
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }

    function createDonut() {
        grid.appendChild(donut)
        donut.classList.add('donut')
        donut.style.left = donutLeftSpace + 'px'
        donut.style.bottom = donutbottomspace + 'px'
    }
    createDonut()

    function createplatforms() {
        for (let i=0; i<platformcount; i++) {
            let platformgap = 600 / platformcount
            let newplatbottom = 100 + i * platformgap
            let newplatform = new Platform(newplatbottom)

        }



    }

    function start() {
        if (!isgameover) {
            createDonut()
            createplatforms()
        }
    }
    //attach to button
    start()
})
