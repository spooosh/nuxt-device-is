import NuxtDeviceIsMixin from  <%= serialize(options.mixin_path) %>;
import {getDeviceFromUa, getDeviceFromWs, isSafari} from  <%= serialize(options.helpers_path) %>;

let options = <%= serialize(options) %>;

let defaultBreakpoints = {
    mobile: 720,
    tablet: 1024,
    laptop: 1440,
    desktop: 999999
};

let breakpoints = options && options.breakpoints ? {...options.breakpoints} : {...defaultBreakpoints};


function getObservableElement(ua) {
    return isSafari(ua) ? document.documentElement.clientWidth : window.innerWidth;
}
function addClientUpdate(onUpdate) {
    window.addEventListener('resize', function () {
        onUpdate(getDeviceFromWs(getObservableElement(navigator.userAgent), breakpoints));
    });
}

export default function (ctx, inject) {
    let deviceIs = ctx.$deviceIs ? ctx.$deviceIs : NuxtDeviceIsMixin();

    if (ctx && ctx.req && ctx.req.headers) {
        deviceIs.update(getDeviceFromUa(ctx.req.headers['user-agent']));
    } else {
        deviceIs.update(getDeviceFromWs(getObservableElement(navigator.userAgent), breakpoints));
        addClientUpdate(deviceIs.update);
    }

    if (!ctx.$deviceIs) {
        ctx.$deviceIs = deviceIs;
        inject('deviceIs', deviceIs);
    }
}
