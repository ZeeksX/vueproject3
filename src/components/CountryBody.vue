<template>
  <div class="container">
    <div id="filters">
      <form id="form" @submit.prevent="filterCountry">
        <label for="input-field" class="sr-only">Search for a country</label>
        <div id="input-bar">
          <i id="search-icon" class="bi bi-search"></i>
          <input @input="updateCountry" name="searchbar" id="input-field" type="text"
            placeholder="Search for a country..." aria-label="Search for a country" v-model="search" />
        </div>
      </form>
      <label for="region" class="sr-only">Filter by Region</label>
      <select id="region" @change="updateRegion" v-model="region" aria-label="Filter by Region">
        <option disabled selected hidden>Filter by Region</option>
        <option v-for="(continent, index) in Continents" :key="index">
          {{ continent }}
        </option>
      </select>
    </div>
    <CardBody :filteredCountries="filteredCountries" />
  </div>
</template>

<script>
import CardBody from './CardBody.vue';

export default {
  name: "CountryBody",
  components: {
    CardBody
  },
  data() {
    return {
      search: "",
      region: "Filter by Region",
      Continents: [
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
        "Antarctic",
      ],
      countriesData: [],
      filteredCountries: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      if (this.countriesData.length === 0) {
        const response = await fetch("https://restcountries.com/v3.1/all");
        this.countriesData = await response.json();
      }
      this.filterCountry();
    },
    async filterCountry() {
      this.filteredCountries = this.countriesData.filter((country) => {
        const searchMatch = country.name.common.toLowerCase().includes(this.search.toLowerCase());
        const regionMatch = country.region.toLowerCase().includes(this.region.toLowerCase());
        return searchMatch || regionMatch;
      });
    },
    updateRegion() {
      this.search = this.region;
      this.filterCountry();
    },
    updateCountry() {
      this.region = "Filter by Region";
      this.filterCountry();
    },
  }
}
</script>
