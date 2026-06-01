<template>
  <section class="section-card">
    <h2 class="section-title">
      <i class="fa fa-folder-open" aria-hidden="true"></i>
      Projects
      <span class="text-muted-soft fw-normal ms-auto small">
        from
        <a
          href="https://github.com/anazaharijeva"
          class="text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>
      </span>
    </h2>

    <div class="projects-carousel">
      <button
        type="button"
        class="carousel-btn carousel-btn--prev"
        aria-label="Previous projects"
        @click="prev"
      >
        <i class="fa fa-chevron-left"></i>
      </button>

      <div class="projects-viewport">
        <div class="row g-3 justify-content-center">
          <div
            v-for="project in visibleProjects"
            :key="project.link"
            class="col-12"
            :class="slideColClass"
          >
            <article class="project-card h-100">
              <h5 class="mb-1">{{ project.name }}</h5>
              <p class="tech-stack mb-2">{{ project.stack }}</p>
              <p class="project-desc">{{ project.description }}</p>
              <a
                :href="project.link"
                class="text-accent small"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github me-1"></i>
                View repository
              </a>
            </article>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="carousel-btn carousel-btn--next"
        aria-label="Next projects"
        @click="next"
      >
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>

    <div v-if="totalPages > 1" class="carousel-dots mt-3">
      <button
        v-for="page in totalPages"
        :key="page"
        type="button"
        class="carousel-dot"
        :class="{ active: page - 1 === currentPage }"
        :aria-label="'Go to page ' + page"
        @click="goToPage(page - 1)"
      ></button>
    </div>
  </section>
</template>

<script>
const GITHUB_USER = 'anazaharijeva'
const REPO_API = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`

const SKIP_REPOS = new Set(['portfolio', 'Lab4_203021'])

const PRIORITY = [
  'TaskFlow',
  'HireHub',
  'smart-crawler',
  'Automatic_NLP_system',
  'MoviesApplication',
  'Jetko_project',
  'Python-Course',
]

const CURATED = {
  TaskFlow: {
    stack: 'ASP.NET Core · React · TypeScript',
    description:
      'Full-stack task management platform for collaborative team workflows, with REST APIs, relational databases, authentication, and task management.',
  },
  HireHub: {
    stack: '.NET 9 · React (Vite) · Docker · RabbitMQ',
    description:
      'Microservices recruitment platform — Auth, Jobs, Applications, Profiles, Messaging, Notifications, Ocelot gateway, JWT, SQL Server per service, RabbitMQ, Docker Compose.',
  },
  'smart-crawler': {
    stack: 'Python · Scrapy · AI',
    description:
      'Intelligent web crawler for AI-assisted content extraction; research presented at CIIT 2024 Congress with automated extraction pipelines.',
  },
  Automatic_NLP_system: {
    stack: 'Python · Jupyter · NLP',
    description:
      'End-to-end NLP system for analyzing and processing medical records using advanced natural language processing techniques.',
  },
  MoviesApplication: {
    stack: '.NET MVC · C# · JavaScript',
    description: '.NET MVC application for managing and browsing movies.',
  },
  Jetko_project: {
    stack: 'HTML · UI/UX',
    description:
      'High-fidelity HCI prototype for a laboratory exercise in human–computer interaction design.',
  },
  'Python-Course': {
    stack: 'JavaScript · Python',
    description: 'Course exercises and projects from a Python programming curriculum.',
  },
}

function formatRepoName(name) {
  if (name === 'smart-crawler') return 'Smart Web Crawler'
  return name.replace(/_/g, ' ')
}

export default {
  name: 'Projects',
  data() {
    return {
      projects: [],
      currentPage: 0,
      slidesVisible: 3,
      fallbackProjects: Object.keys(CURATED).map((name) => ({
        name: formatRepoName(name),
        stack: CURATED[name].stack,
        description: CURATED[name].description,
        link: `https://github.com/${GITHUB_USER}/${name}`,
      })),
    }
  },
  computed: {
    totalPages() {
      if (!this.projects.length) return 0
      return Math.ceil(this.projects.length / this.slidesVisible)
    },
    visibleProjects() {
      const start = this.currentPage * this.slidesVisible
      return this.projects.slice(start, start + this.slidesVisible)
    },
    slideColClass() {
      if (this.slidesVisible === 1) return ''
      if (this.slidesVisible === 2) return 'col-md-6'
      return 'col-lg-4 col-md-6'
    },
  },
  mounted() {
    this.loadProjects()
    this.updateSlidesVisible()
    window.addEventListener('resize', this.updateSlidesVisible)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesVisible)
  },
  methods: {
    async loadProjects() {
      try {
        const response = await fetch(REPO_API)
        if (!response.ok) throw new Error('GitHub API error')
        const repos = await response.json()
        const mapped = repos
          .filter((repo) => !SKIP_REPOS.has(repo.name))
          .map((repo) => {
            const curated = CURATED[repo.name]
            return {
              name: formatRepoName(repo.name),
              stack: curated?.stack || repo.language || '—',
              description:
                curated?.description ||
                repo.description ||
                `Open-source project on GitHub (${repo.name}).`,
              link: repo.html_url,
              sortKey: PRIORITY.indexOf(repo.name),
            }
          })
          .sort((a, b) => {
            const ai = a.sortKey === -1 ? 999 : a.sortKey
            const bi = b.sortKey === -1 ? 999 : b.sortKey
            return ai - bi
          })
        const unique = []
        const seen = new Set()
        mapped.forEach((item) => {
          const { sortKey, ...rest } = item
          if (seen.has(rest.link)) return
          seen.add(rest.link)
          unique.push(rest)
        })
        this.projects = unique
        this.clampPage()
      } catch {
        this.projects = this.fallbackProjects
        this.clampPage()
      }
    },
    updateSlidesVisible() {
      const w = window.innerWidth
      this.slidesVisible = w >= 992 ? 3 : w >= 576 ? 2 : 1
      this.clampPage()
    },
    clampPage() {
      if (this.currentPage >= this.totalPages) {
        this.currentPage = Math.max(0, this.totalPages - 1)
      }
    },
    next() {
      if (!this.totalPages) return
      this.currentPage = (this.currentPage + 1) % this.totalPages
    },
    prev() {
      if (!this.totalPages) return
      this.currentPage = (this.currentPage - 1 + this.totalPages) % this.totalPages
    },
    goToPage(page) {
      this.currentPage = page
    },
  },
}
</script>
