import NuxtDeviceIsMixin from  '<%= options.mixin_path %>';
import {getDeviceFromUa, getDeviceFromWs} from  '<%= options.helpers_path %>';

let options = <%= serialize(options) %>;

let defaultBreakpoints = {
    mobile: 720,
    tablet: 1024,
    laptop: 1440,
    desktop: 999999
};

let breakpoints = options && options.breakpoints ? {...options.breakpoints} : {...defaultBreakpoints};

function addClientUpdate(onUpdate) {
    const keys = Object.keys(breakpoints);
    const values = Object.values(breakpoints);

    values.forEach((mq, i) => {
        const mediaQuery = (values[i - 1])
                           ? `(min-width: ${values[i - 1]}px) and (max-width: ${mq - 1}px)`
                           : `(max-width: ${mq}px)`;

        const mql = window.matchMedia(mediaQuery);
        const cb = ({ matches }) => {
          if (matches) onUpdate(keys[i]);
        };

        mql.addListener(cb); //subscribing
        cb(mql); //initial trigger
    });
}

export default function (ctx, inject) {
    let deviceIs = ctx.$deviceIs ? ctx.$deviceIs : NuxtDeviceIsMixin();

    if (ctx && ctx.req && ctx.req.headers) {
        deviceIs.update(getDeviceFromUa(ctx.req.headers['user-agent']));
    } else {
        deviceIs.update(getDeviceFromWs(window.innerWidth, breakpoints));
        addClientUpdate(deviceIs.update);
    }

    if (!ctx.$deviceIs) {
        ctx.$deviceIs = deviceIs;
        inject('deviceIs', deviceIs);
    }
}
