export function getDeviceFromUa(ua) {
    return ua.match(/Android/i)
    || ua.match(/webOS/i)
    || ua.match(/iPhone/i)
    || ua.match(/iPod/i)
    || ua.match(/BlackBerry/i)
    || ua.match(/Windows Phone/i)
        ? 'mobile'
        : 'desktop';
}

export function getDeviceFromWs(ws, breakpoints) {
    let keys = Object.keys(breakpoints);
    let values = Object.values(breakpoints);

    values.push(ws);
    values.sort((a, b) => a - b);

    let index = values.indexOf(ws);

    return keys[index];
}
