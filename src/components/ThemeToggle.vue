<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="$store.commit('toggleTheme')"
  >
    <i class="fa" :class="isDark ? 'fa-sun-o' : 'fa-moon-o'" aria-hidden="true"></i>
    <span>{{ isDark ? 'Light' : 'Dark' }}</span>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ThemeToggle',
  computed: {
    ...mapGetters(['isDark']),
  },
}
</script>
