<template>
  <div class="nav">
    <nav class="navbar">
      <div class="navbar-fluid-one">
        <h3 class="navbar-item-one">{{ text }}</h3>
      </div>
      <div class="navbar-fluid-two">
        <i class="bi bi-moon"></i>
        <h3 @click="toggleText" class="navbar-item-two">{{ mode }}</h3>
      </div>
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