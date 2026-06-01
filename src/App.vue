<template>
  <div id="app">
    <ThemeToggle />
    <router-view />
  </div>
</template>

<script>
import ThemeToggle from '@/components/ThemeToggle.vue'

export default {
  components: { ThemeToggle },
  mounted() {
    this.$store.dispatch('initTheme')
  },
}
</script>
