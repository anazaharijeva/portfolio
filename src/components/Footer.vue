<template>
  <section class="footer-section py-4">
    <div class="container portfolio-container">
      <div class="row g-3">
        <div class="col-md-4">
          <h4 class="footer-heading mb-2">Contact</h4>
          <ul class="list-unstyled text-body-main small mb-0">
            <li v-for="item in contact" :key="item" class="mb-1">{{ item }}</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4 class="footer-heading mb-2">Links</h4>
          <div v-for="app in apps" :key="app.name" class="mb-1">
            <a class="text-accent small" :href="app.link" target="_blank" rel="noopener noreferrer">
              <i class="fa me-1" :class="app.icon"></i>{{ app.name }}
            </a>
          </div>
        </div>
        <div class="col-md-4 text-md-end">
          <p class="text-muted-soft small mb-0">&copy; {{ year }} Ana Zaharijeva</p>
          <p class="text-muted-soft small">Software Engineer · Skopje, North Macedonia</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Footer',
  computed: {
    ...mapState(['linkedInUrl']),
    apps() {
      return [
        { name: 'GitHub', link: 'https://github.com/anazaharijeva', icon: 'fa-github' },
        { name: 'LinkedIn', link: this.linkedInUrl, icon: 'fa-linkedin' },
      ]
    },
  },
  data() {
    return {
      year: new Date().getFullYear(),
      contact: [
        'zaharijevaana@gmail.com',
        '+389 77 839 880',
        'Skopje, North Macedonia',
      ],
    }
  },
}
</script>
