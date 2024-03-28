<template>
  <div class="nav">
    <!--<nav class="navlist">
      <h3>{{ text }}</h3>
      <i class="fa-regular fa-moon"></i>
      <h3 @click="toggleText">{{ mode }}</h3>
    </nav>-->
    <nav class="navbar">
      <div class="container-fluid-one">
        <h3 class="navbar-brand">{{ text }}</h3>
      </div>
      <div class="container-fluid-two">
        <i class="bi bi-moon"></i>
        <h3 @click="toggleText" class="navbar-brand">{{ mode }}</h3>
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