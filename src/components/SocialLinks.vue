<template>
  <section class="hero-section">
    <div class="container portfolio-container">
      <div class="row align-items-center g-3">
        <div class="col-auto text-center text-md-start">
          <img
            :src="profilePhoto"
            class="profile-img rounded-circle"
            alt="Ana Zaharijeva"
          >
        </div>
        <div class="col">
          <h1 class="hero-title mb-1">Ana Zaharijeva</h1>
          <p class="hero-subtitle mb-2">
            Software Engineer · .NET &amp; Full-Stack Development
          </p>
          <p class="hero-tagline mb-3 small">
            Full-stack developer with experience in .NET, REST APIs, SQL databases,
            and modern web applications. Open to software engineering opportunities.
          </p>
          <div class="d-flex flex-wrap gap-2">
            <a
              v-for="link in quickLinks"
              :key="link.name"
              :href="link.href"
              class="btn btn-sm btn-theme"
              :target="link.external ? '_blank' : null"
              :rel="link.external ? 'noopener noreferrer' : null"
            >
              <i class="fa me-1" :class="link.icon"></i>
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import profilePhoto from '@/assets/picture_me.jpg'

export default {
  name: 'SocialLinks',
  data() {
    return { profilePhoto }
  },
  computed: {
    ...mapState(['linkedInUrl']),
    quickLinks() {
      return [
        { name: 'GitHub', href: 'https://github.com/anazaharijeva', icon: 'fa-github', external: true },
        { name: 'LinkedIn', href: this.linkedInUrl, icon: 'fa-linkedin', external: true },
        { name: 'Email', href: 'mailto:zaharijevaana@gmail.com', icon: 'fa-envelope', external: false },
      ]
    },
  },
}
</script>
