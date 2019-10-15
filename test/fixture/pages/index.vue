<template>
    <div v-if="$deviceIs.mobile">
        Is Mobile
    </div>

    <div v-else-if="$deviceIs.pc">
        Is PC
    </div>
</template>

<script>
    export default {
        name: 'Index'
    };
</script>
