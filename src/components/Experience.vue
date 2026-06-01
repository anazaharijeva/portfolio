<template>
  <section class="section-card">
    <h2 class="section-title">
      <i class="fa fa-briefcase" aria-hidden="true"></i>
      Experience
    </h2>
    <div
      v-for="job in experience"
      :key="job.title + job.period"
      class="timeline-item"
    >
      <h3 class="h6 text-body-main fw-semibold mb-1">{{ job.title }}</h3>
      <p class="text-muted-soft small mb-2">{{ job.location }} | {{ job.period }}</p>
      <ul class="mb-0 ps-3 experience-list">
        <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experience: [
        {
          title: 'Junior Developer | Pikasa Analytics',
          location: 'Skopje',
          period: 'May 2024 – Present',
          highlights: [
            'Developed and maintained production-grade features for a .NET web platform using C#, .NET Core, and ASP.NET MVC.',
            'Designed and implemented RESTful APIs for application integration and backend communication.',
            'Managed relational databases using Entity Framework and SQL Server.',
            'Built responsive frontend components using Bootstrap.',
            'Implemented authentication and authorization mechanisms to improve platform security.',
            'Collaborated within production workflows and participated in feature delivery cycles.',
          ],
        },
        {
          title: 'Intern - Pikasa Analytics',
          location: 'Skopje',
          period: 'Feb 2024 – Apr 2024',
          highlights: [
            'Performed web scraping and web crawling using Scrapy for large-scale data extraction.',
            'Processed and cleaned extracted datasets before storage and analysis.',
            'Worked with SQL Server for structured data management.',
          ],
        },
        {
          title: 'Frontend / Backend Intern | Venikom',
          location: 'Kocani',
          period: 'Jun 2022 – Aug 2022',
          highlights: [
            'Developed responsive web interfaces using Vue.js, Nuxt.js, and Bootstrap.',
            'Worked with PHP, Laravel, and MySQL to support backend functionality.',
            'Improved application usability through responsive UI implementation.',
            'Strengthened understanding of full-stack development principles and database architecture.',
          ],
        },
      ],
    }
  },
}
</script>
