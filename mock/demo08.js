function mockData() {
    function randomData() {
        now = new Date(+now + oneDay)
        value = value + Math.random() * 21 - 10
        return {
                date: new Date([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-')),
                value: 100 + Math.random() * 200 >> 0
        }
    }
    
    const data = []
    let now = +new Date(1997, 9, 3)
    let oneDay = 24 * 3600 * 1000
    let value = Math.random() * 1000
    for (var i = 0; i < 20; i++) {
        data.push(randomData(i))
    }

    return data
}