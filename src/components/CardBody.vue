<template>
  <div class="countryCard">
    <div v-for="(country, index) in filteredCountries" class="card" :key="index" @click="updateCountries(index)"
      :class="{ selected: selectedIndex === index }" tabindex="0" role="button"
      :aria-label="'Select country ' + country.name.common">
      <div id="contents">
        <button v-if="selectedIndex == index" id="back" aria-label="Go back">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          Back
        </button>
        <img :src="country.flags.svg" class="card-img-top" :alt="country.flags.alt" tabindex="0" />
      </div>
      <div v-if="selectedIndex !== index" class="card-body">
        <h1 tabindex="0">{{ country.name.common }}</h1>
        <p tabindex="0"><b>Population: </b>{{ country.population }}</p>
        <p tabindex="0"><b>Region: </b> {{ country.region }}</p>
        <p tabindex="0"><b>Capital: </b> {{ getCapital(country.capital) }}</p>
      </div>
      <div v-else>
        <DetailBody :country="country" />
        <footer>
          <div class="footer-buttons">
            <p><b>Border Countries: </b></p>
            <button v-for="(button, index) in buttons" :key="index" tabindex="0">{{ button }}</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import DetailBody from './DetailBody.vue'

export default {
  props: {
    filteredCountries: Array,
  },
  data() {
    return {
      selectedIndex: null,
    };
  },
  components: {
    DetailBody
  },
  methods: {
    updateCountries(index) {
      if (this.selectedIndex !== index) {
        this.selectedIndex = index;
        this.buttons = [];
        this.buttons = this.getBorders(this.filteredCountries[index]);
      } else {
        this.selectedIndex = null;
      }
      const cards = document.querySelectorAll(".card");
      const filter = document.getElementById("filters");
      const screenWidth = window.innerWidth;
      cards.forEach((card, i) => {
        if (i !== index) {
          card.style.width = "";
          if (this.selectedIndex === null) {
            card.style.display = "flex";
            if (screenWidth <= 700) {
              filter.style.display = "block";
            } else {
              filter.style.display = "flex";
            }
          } else {
            card.style.display = "none";
            filter.style.display = "none";
          }
        }
      });
    },
    getCapital(country) {
      if (Array.isArray(country)) {
        return country.join(", ");
      } else if (typeof country === "string") {
        return country;
      } else {
        return "N/A";
      }
    },
    format(name) {
      if (Array.isArray(name)) {
        return name.join(", ");
      } else {
        return name;
      }
    },
    getBorders(country) {
      const buttons = [];
      if (country.borders) {
        country.borders.forEach(borderCode => {
          const borderCountry = this.filteredCountries.find(country => country.cca3 === borderCode);
          buttons.push(borderCountry ? borderCountry.name.common : "N/A");
        });
      }
      return buttons.length > 0 ? buttons : ["N/A"];
    },
  },
};
</script>
