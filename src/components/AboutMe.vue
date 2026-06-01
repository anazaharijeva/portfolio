<template>
  <section class="section-card">
    <h2 class="section-title">
      <i class="fa fa-user" aria-hidden="true"></i>
      About Me
    </h2>
    <div class="row g-4">
      <div class="col-12 col-lg-7">
        <p class="mb-0 text-body-main">
          Computer Science and Engineering graduate with professional experience in
          full-stack development and data-driven applications. Skilled in C#, .NET,
          ASP.NET Core, Python, Java, SQL, and modern web technologies — including RESTful
          APIs, database design, web scraping, and scalable software delivery.
        </p>
      </div>
      <div class="col-12 col-lg-5">
        <h3 class="skill-category-title mb-2">Languages</h3>
        <div v-for="lang in languages" :key="lang.name" class="mb-2">
          <div class="d-flex justify-content-between small mb-1">
            <span class="fw-semibold text-body-main">{{ lang.name }}</span>
            <span class="text-muted-soft">{{ lang.level }}</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              :style="{ width: lang.progressWidth }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      languages: [
        { name: 'Macedonian', level: 'Native', progressWidth: '100%' },
        { name: 'English', level: 'Working proficiency', progressWidth: '85%' },
      ],
    }
  },
}
</script>
