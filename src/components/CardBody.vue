<template>
  <div class="countryCard">
    <div v-for="(country, index) in filteredCountries" class="card" :key="index" @click="selectCountry(index)">
      <div id="contents">
        <img :src="country.flags.svg" class="card-img-top" :alt="country.flags.alt" />
      </div>
      <div class="card-body">
        <h1 class="card-text">{{ country.name.common }}</h1>
        <p><b>Population: </b>{{ country.population }}</p>
        <p><b>Region: </b> {{ country.region }}</p>
        <p><b>Capital: </b> {{ getCapital(country.capital) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filteredCountries: Array,
  },
  methods: {
    selectCountry(index) {
      this.$emit("updateCountries", index);
    },
    getCapital(capital) {
      if (Array.isArray(capital)) {
        return capital.join(", ");
      } else if (typeof capital === "string") {
        return capital;
      } else {
        return "N/A";
      }
    },
  },
};
</script>
