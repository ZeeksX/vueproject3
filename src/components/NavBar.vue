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
      mode: "Light Mode",
      text: "Where in the world?"
    }
  },
  methods: {
    toggleText() {
      if (this.mode === 'Light Mode') {
        this.mode = 'Dark Mode';
        document.body.style.backgroundColor = "hsl(207, 26%, 17%)"; 
      } else {
        this.mode = 'Light Mode';
        document.body.style.backgroundColor = "hsl(0, 0%, 98%)"; 
      }
    }
  }
}
</script>

