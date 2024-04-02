<template>
  <div class="nav">
    <nav class="navbar">
      <div class="navbar-fluid-one">
        <h3 class="navbar-item-one">{{ text }}</h3>
      </div>
      <div class="navbar-fluid-two">
        <i class="bi bi-moon-fill"></i>
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
      text: "Where in the world?"
    }
  },
  methods: {
    toggleText() {
      const body = document.querySelector("body");
      const nav = document.querySelector("nav");
      const cards = document.querySelectorAll(".card")
      const input = document.querySelector("input")
      const btn = document.querySelector("button")
      if (this.mode === 'Light Mode') {
        this.mode = 'Dark Mode';
        body.style.backgroundColor = "hsl(0, 0%, 98%)";
        nav.style.color = "black";
      } else {
        this.mode = 'Light Mode';
        body.style.backgroundColor = "hsl(207, 26%, 17%)";
        nav.style.boxShadow = "0px 0px 4px hsl(207, 26%, 17%)"
        nav.style.backgroundColor = "#2f3f4c"
        nav.style.color = "white";
        input.style.backgroundColor = "#2f3f4c"
        input.style.color = "white"
        btn.style.backgroundColor="#2f3f4c"
        btn.style.color = "white"
        cards.forEach(card=>{
          card.style.backgroundColor = "#2f3f4c"
          card.style.color ="white"
        })
      }
    }
  }
}
</script>
