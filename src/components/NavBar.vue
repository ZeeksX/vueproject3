<template>
  <div class="nav" :style="{ backgroundColor: backgroundColor }">
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
      mode: "Dark Mode",
      text: "Where in the world?",
      backgroundColor: "hsl(207, 26%, 17%)" 
    }
  },
  methods: {
    toggleText() {
      if (this.mode === 'Light Mode') {
        this.mode = 'Dark Mode';
        this.backgroundColor = "hsl(207, 26%, 17%)";
        document.body.style.backgroundColor = "hsl(207, 26%, 17%)"; 
      } else {
        this.mode = 'Light Mode';
        this.backgroundColor = "hsl(0, 0%, 98%)";
        document.body.style.backgroundColor = "hsl(0, 0%, 98%)"; 
      }
    }
  }
}
</script>

