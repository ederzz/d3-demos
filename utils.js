function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

const pxStr2numberReg = /([0-9]+\.?[0-9]+)px/

function tsPx2number(s) {
    return Number(pxStr2numberReg.exec(s)[1])
}

function calcWidthHeight(selector) {
    const eve = d3.select(selector)
    const w = eve.style('width')
    const h = eve.style('height')

    return [
        tsPx2number(w),
        tsPx2number(h)
    ]
}

function createSvg(w = window.innerWidth, h = window.innerHeight) {
    return d3.select('body')
        .append('svg')
        .attr('width', w)
        .attr('height', h)
        .append('g')
        .attr('transform', `translate(${ w / 2 }, ${ h / 2 })`)
}

// 转换弧度值为角度
function tsRadian2angle(radian) {
    return radian * 180 / Math.PI
}

function setAttr(ele, attrs) {
    for (const [key, val] of Object.entries(attrs)) {
        ele.attr(key, val)
    }
}

function buildGradient(id, data) {
    linearGradient = svg.select('gradient-wrapper')
        .append('linearGradient')
        .attr('id', id)
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '100%')
        .attr('y2', '0%')
        .attr('gradientUnits', 'userSpaceOnUse')
        .selectAll('stop')
        .data(data)
        .enter()
        .append('stop')
        .attr('offset', ({ offset }) => offset)
        .attr('stop-color', ({ color }) => color)
}