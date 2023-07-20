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

  <div v-else-if="$deviceIs.crawler">
    crawler
  </div>
</template>

<script>
export default {
  name: 'Index',

  mounted() {
    window.addEventListener('resize', () => {
      console.log('window.innerWidth - ' + window.innerWidth);
      console.log('documentEL.clientWidth - ' + document.documentElement.clientWidth);
    });
  },
};
</script>

<style lang="css">
body {
  height: 2000px;
}

@media (max-width: 1440px) {
  body {
    color: red;
  }
}
</style>
