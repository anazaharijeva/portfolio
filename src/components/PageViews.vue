<template>
  <div class="page-feedback">
    <p class="text-muted small mb-2">Rate this portfolio</p>
    <div class="d-flex justify-content-center gap-2 mb-2">
      <button type="button" class="btn btn-sm btn-outline-success" @click="++likes">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
      </button>
      <button type="button" class="btn btn-sm btn-outline-danger" @click="++dislikes">
        <i class="fa fa-thumbs-down" aria-hidden="true"></i>
      </button>
    </div>
    <p class="text-muted small mb-0">
      {{ likesPercentage.toFixed(0) }}% positive
    </p>
  </div>
</template>

<script>
export default {
  name: "PageViews",
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  computed: {
    likesPercentage() {
      if (this.likes + this.dislikes === 0) return 0;
      return (this.likes * 100) / (this.likes + this.dislikes);
    },
    dislikePercentage() {
      if (this.likes + this.dislikes === 0) return 0;
      return (this.dislikes * 100) / (this.likes + this.dislikes);
    },
  },
  watch: {},
};
</script>

<style scoped>

</style>