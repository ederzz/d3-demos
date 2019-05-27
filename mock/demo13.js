function mockData(radius) {
    const n = 350
    const data = []
    for (let i = 1; i <= n; i++) {
        data.push({
            angle: Math.PI / n * 2 * i,
            radius: radius / 4 * 3 + radius * Math.random() / 8
        })
    }
    return data
}

function mockData2() {
    const n = 350
    const data = []
    for (let i = 1; i <= n; i++) {
        data.push({
            x: i,
            y: 200 + 20 * Math.random()
        })
    }
    console.log(data)
    return data
}