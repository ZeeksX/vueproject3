<!-- <template>
  <div class="nav">
    <nav class="navbar">
      <div class="navbar-fluid-one">
        <h3 class="navbar-item-one">Where in the world?</h3>
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
    }
  },
  methods: {
    toggleText() {
      const body = document.querySelector("body");
      const nav = document.querySelector("nav");
      const cards = document.querySelectorAll(".card")

      const input = document.querySelector("input")
      const btn = document.querySelector("button")
      const input_bar = document.getElementById("input-bar")
      const select = document.querySelector("select")
      const icon = document.getElementById("search-icon")
      if (this.mode === 'Light Mode') {
        this.mode = 'Dark Mode';
        body.style.backgroundColor = "hsl(0, 0%, 98%)";
        nav.style.color = "hsl(207, 26%, 17%)";
        nav.style.backgroundColor = "white"
        nav.style.boxShadow = "0px 0px 4px #dedede"
        input.style.backgroundColor = "white"
        input.style.color = "hsl(0, 0%, 52%)"
        input.classList.toggle('white-placeholder')
        input_bar.style.boxShadow = "0px 0px 4px #dedede"
        btn.style.backgroundColor = "white"
        btn.style.color = "hsl(0, 0%, 52%)"
        select.style.backgroundColor = "white"
        select.style.color = "hsl(0, 0%, 52%)"
        select.style.boxShadow = "0px 0px 4px #dedede"

        icon.style.color = "grey"
        cards.forEach(card => {
          card.style.backgroundColor = "white"
          card.style.color = "hsl(207, 26%, 17%)"
        })
      } else {
        this.mode = 'Light Mode';
        body.style.backgroundColor = "hsl(207, 26%, 17%)";
        nav.style.boxShadow = "0px 0px 4px hsl(207, 26%, 17%)"
        nav.style.backgroundColor = "#2f3f4c"
        nav.style.color = "white";
        input.style.backgroundColor = "#2f3f4c"
        input.style.color = "white"
        input.style.border = "none"
        input.classList.toggle('white-placeholder')
        input_bar.style.boxShadow = "0px 0px 4px hsl(207, 26%, 17%)"
        btn.style.backgroundColor = "#2f3f4c"
        btn.style.color = "white"
        btn.style.border = "none"
        select.style.backgroundColor = "#2f3f4c"
        select.style.color = "white"
        select.style.boxShadow = "0px 0px 4px hsl(207, 26%, 17%)"
        select.style.border = "none"
        icon.style.color = "white"

        cards.forEach(card => {
          card.style.backgroundColor = "#2f3f4c"
          card.style.color = "white"
        })
      }
    }
  }
}
</script> -->
<template>
  <div class="nav">
    <nav class="navbar">
      <div class="navbar-fluid-one">
        <h3 class="navbar-item-one">Where in the world?</h3>
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
    }
  },
  methods: {
    toggleText() {
      this.mode = this.mode === 'Light Mode' ? 'Dark Mode' : 'Light Mode';
      document.body.classList.toggle('dark-theme');
    }
  }
}
</script>
