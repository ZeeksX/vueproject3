<template>
  <div class="nav">
    <nav class="navbar">
      <div class="navbar-fluid-one">
        <h3 class="navbar-item-one">Where in the world?</h3>
      </div>
      <div class="navbar-fluid-two">
        <i class="bi bi-moon-fill"></i>
        <h3 @click="toggleMode" class="navbar-item-two">{{ mode }}</h3>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data() {
    return {
      mode: "Dark Mode",
    }
  },
  methods: {
    toggleMode() {
      this.mode = this.mode === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
      document.body.classList.toggle('dark-theme');
    }
  }
}
</script>
