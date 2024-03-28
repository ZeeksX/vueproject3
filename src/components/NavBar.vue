<template>
  <div class="navbar">
    <nav class="navlist">
      <h3>Where in the world?</h3>
      <h3 @click="toggleText"><i class="fa-regular fa-moon"></i>{{ mode }}</h3>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      mode: "Dark mode"
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