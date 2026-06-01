<template>
  <section class="section-card">
    <h2 class="section-title fs-4">
      <i class="fa fa-code" aria-hidden="true"></i>
      Skills
    </h2>
    <div class="row">
      <div
        v-for="category in skillCategories"
        :key="category.title"
        class="col-12 col-md-6 col-lg-4 mb-3"
      >
        <p class="skill-category-title mb-2">{{ category.title }}</p>
        <span
          v-for="skill in category.items"
          :key="skill"
          class="skill-badge"
        >{{ skill }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skillCategories: [
        {
          title: "Languages",
          items: ["C#", "Python", "Java", "SQL", "JavaScript"],
        },
        {
          title: "Frontend",
          items: ["React", "Vue.js", "HTML/CSS", "Bootstrap", "TypeScript"],
        },
        {
          title: "Backend",
          items: [".NET Core", "ASP.NET MVC", "REST APIs", "Spring Boot"],
        },
        {
          title: "Databases",
          items: ["SQL Server", "PostgreSQL", "MySQL"],
        },
        {
          title: "Tools & Data",
          items: ["Git", "Docker", "Elasticsearch", "Kibana", "Scrapy", "RabbitMQ"],
        },
      ],
    };
  },
};
</script>
