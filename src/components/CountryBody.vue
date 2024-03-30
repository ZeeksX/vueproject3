<template>
  <div class="container">
    <div id="filters">
      <form id="form" @submit.prevent="filterCountry">
        <div class="input-group mb-3 search-bar" id="input-bar">
          <button type="submit" class="input-group-text" @click="updateCountry">
            <i class="bi bi-search"></i>
          </button>
          <input @change="updateCountry" name="searchbar" id="input-field" type="text" class="form-control"
            :placeholder="text" aria-label="Search" v-model="search" />
        </div>
      </form>
      <select id="region" @change="updateRegion" v-model="region">
        <option disabled selected>Filter by Region</option>
        <option v-for="(continent, index) in Continents" :key="index">
          {{ continent }}
        </option>
      </select>
    </div>
    <div class="countryCard">
      <div v-for="(country, index) in filteredCountries" class="card" style="width: 18rem" :key="index"
        @click="updateCountries(index)" :class="{ selected: selectedIndex === index }">
        <img :src="country.flags.svg" class="card-img-top" alt="country-flag" />
        <div v-if="selectedIndex !== index" class="card-body">
          <h1 class="card-text">{{ country.name.common }}</h1>
          <p><b>Population: </b>{{ country.population }}</p>
          <p><b>Region: </b> {{ country.region }}</p>
          <p><b>Capital: </b> {{ formatCapital(country.capital) }}</p>
        </div>
        <div v-else class="card-body">
          <h1>{{ country.name.common }}</h1>
          <p><b>Native Name: </b>{{ country.nativeName }}</p>
          <p><b>Population: </b>{{ country.population }}</p>
          <p><b>Region: </b>{{ country.region }}</p>
          <p><b>Sub Region: </b>{{ country.subregion }}</p>
          <p><b>Capital: </b>{{ formatCapital(country.capital) }}</p>
          <p><b>Top Level Domain: </b>{{ country.topLevelDomain }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullBody",
  data() {
    return {
      text: "Search for a country...",
      search: "",
      region: "Filter by Region",
      backgroundColor: "red",
      Continents: [
        "Africa",
        "Asia",
        "Europe",
        "Americas",
        "Oceania",
        "Antarctic",
      ],
      countriesData: [],
      filteredCountries: [],
      selectedIndex: null,
    };
  },
  mounted() {
    this.filterCountry();
  },
  methods: {
    async filterCountry() {
      await this.getData();
      this.filteredCountries = this.countriesData.filter((country) => {
        const searchMatch = country.name.common
          .toLowerCase()
          .includes(this.search.toLowerCase());
        const regionMatch = country.region
          .toLowerCase()
          .includes(this.region.toLowerCase());
        return searchMatch || regionMatch;
      });
    },
    async getData() {
      if (this.countriesData.length === 0) {
        const response = await fetch("https://restcountries.com/v3.1/all");
        this.countriesData = await response.json();
        
      }
      this.filteredCountries = this.countriesData;
      console.log(this.filteredCountries)
    },
    updateRegion() {
      this.search = this.region;
      this.filterCountry();
    },
    updateCountry() {
      this.region = "Filter by Region";
      this.filterCountry();
    },
    updateCountries(index) {
      if (this.selectedIndex !== index) {
        this.selectedIndex = index;
      } else {
        this.selectedIndex = null;
      }
      const cards = document.querySelectorAll(".card");
      cards.forEach((card, i) => {
        if (i !== index) {
          if (this.selectedIndex === null) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        }
      });
    },
    formatCapital(capital) {
      if (Array.isArray(capital)) {
        return capital.join(", ");
      } else {
        return capital;
      }
    },
  },
};
</script>
