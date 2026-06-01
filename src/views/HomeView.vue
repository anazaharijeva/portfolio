<template>
  <main>
    <SocialLinks />
    <div class="container portfolio-container">
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
    <Footer />
  </main>
</template>

<script>
import Education from '@/components/Education'
import SocialLinks from '@/components/SocialLinks'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default {
  name: 'HomeView',
  components: {
    Footer,
    AboutMe,
    SocialLinks,
    Education,
    Skills,
    Experience,
    Projects,
  },
}
</script>
