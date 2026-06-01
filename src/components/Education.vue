<template>
  <section class="section-card">
    <h2 class="section-title">
      <i class="fa fa-graduation-cap" aria-hidden="true"></i>
      Education
    </h2>
    <div
      v-for="item in education"
      :key="item.title"
      class="mb-3 pb-3 border-theme border-bottom"
    >
      <h3 class="h6 text-body-main fw-semibold mb-1">{{ item.title }}</h3>
      <p class="text-accent-label small mb-1">{{ item.institution }}</p>
      <p class="text-muted-soft small mb-0">{{ item.period }}</p>
      <p v-if="item.description" class="small text-body-main mt-2 mb-0">{{ item.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      education: [
        {
          title: 'Bachelor of Computer Science and Engineering',
          institution: 'Faculty of Computer Science and Engineering (FCSE), Skopje',
          period: '2020 – 2024',
          description: 'Software engineering, OOP, databases, API design, full-stack development.',
        },
        {
          title: 'High School',
          institution: 'Ljupco Santov — Kocani',
          period: '2016 – 2020',
          description: null,
        },
      ],
    }
  },
}
</script>
