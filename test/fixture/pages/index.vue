<template>
    <div v-if="$deviceIs.mobile">
        Is Mobile
    </div>

    <div v-else-if="$deviceIs.tablet">
        Is tablet
    </div>

    <div v-else-if="$deviceIs.laptop">
        Is laptop && PC
    </div>

    <div v-else-if="$deviceIs.desktop">
        Is desktop && PC
    </div>
</template>

<script>
    export default {
        name: 'Index'
    };
</script>