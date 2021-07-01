# Nuxt-device-is

Library to detect mobile/tablet/desktop devices on server and in browser.

### Installation

```shell
npm i nuxt-device-is
```

### Usage

1) Add to nuxt.config.js module section

```javascript
module.exports = {
    modules: [
        'nuxt-device-is',
    ],
};
```

2) Set yours breakpoints options for browser detection

```javascript
module.exports = {
    NuxtDeviceIs: {
        breakpoints: {
            mobile: 720,
            tablet: 1024,
            laptop: 1440,
            desktop: 999999
        }
    },
};
```

That are default breakpoints.

3) Use $deviceIs instance wherever you want:

### In Template section

```vue

<template>
    <button v-if="$deviceIs.mobile">mobile button</button>
    <button v-else-if="$deviceIs.desktop">desktop button</button>
</template>
```

### In JavaScript section

```javascript
export default {
    data() {
        return {
            children: [
                { ... },
                { ... },
                { ... },
                { ... },
                { ... },
                { ... },
                { ... },
                { ... },
            ]
        };
    },

    computed: {
        childrenList() {
            switch (this.$deviceIs.device) {
                case 'mobile':
                    return [...this.children].slice(0, 4);
                case 'tablet':
                    return [...this.children].slice(0, 6);
                default:
                    return this.children;
            }
        },
    },
}
```

### Available computed options

```javascript
this.$deviceIs.mobile;
this.$deviceIs.tablet;
this.$deviceIs.laptop;
this.$deviceIs.desktop;
this.$deviceIs.pc; // if device is laptop or desktop
```

### Available device option values

```javascript
['mobile', 'tablet', 'laptop', 'desktop']
```

