function calculator() {
    let app = document.querySelector(".app")
    let calculator = document.createElement('div')
    let screen = document.createElement('div')
    let grid = document.createElement('div')
    calculator.className = "calculator"
    screen.className = "screen"
    grid.className = "grid"
    app.append(calculator)
    calculator.append(screen)
    calculator.append(grid)
    for (let i = 0; i < 20; i++) {
        if (i < 10) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item item${i}`
            grid_item.textContent = `${i}`
            grid.append(grid_item)
        } else if (i === 11) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item del`
            grid_item.textContent = `CLR`
            grid.append(grid_item)
        }
        else if (i === 12) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item del`
            grid_item.textContent = `DEL`
            grid.append(grid_item)
        } else if (i === 13) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item del`
            grid_item.innerHTML = `X<sup>n</sup>`
            grid.append(grid_item)
        } else if (i === 14) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item divide`
            grid_item.innerHTML = `/`
            grid.append(grid_item)
        } else if (i === 15) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item multiply`
            grid_item.innerHTML = `X`
            grid.append(grid_item)
        } else if (i === 16) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item minus`
            grid_item.innerHTML = `-`
            grid.append(grid_item)
        } else if (i === 17) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item plus`
            grid_item.innerHTML = `+`
            grid.append(grid_item)
        } else if (i === 18) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item equal`
            grid_item.innerHTML = `=`
            grid.append(grid_item)
        } else if (i === 19) {
            let grid_item = document.createElement('div')
            grid_item.className = `grid-item dot`
            grid_item.innerHTML = `.`
            grid.append(grid_item)
        }

    }

}

calculator();