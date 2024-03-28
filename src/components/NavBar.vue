<template>
  <div class="navbar">
    <nav class="navlist">
      <h3>{{ text }}</h3>
      <i class="fa-regular fa-moon"></i>
      <h3 @click="toggleText">{{ mode }}</h3>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      mode: "Dark mode",
      text: "Where in the world?"
    }
  },
  methods: {
    toggleText() {
      if (this.mode === 'Light Mode') {
        this.mode = 'Dark Mode';
      } else {
        this.mode = 'Light Mode';
      }
    }
  }
}
</script>