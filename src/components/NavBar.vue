<template>
  <div class="navbar">
    <!--<nav class="navlist">
      <h3>{{ text }}</h3>
      <i class="fa-regular fa-moon"></i>
      <h3 @click="toggleText">{{ mode }}</h3>
    </nav>-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <h3 class="navbar-brand" href="#">{{ text }}</h3>
        <button class="navbar-toggler" @click="toggleText" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          {{ mode }}
        </button>
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