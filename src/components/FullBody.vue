<template>
    <div class="container">
        <form id="form" @submit.prevent="filterCountry">
            <div class="input-group mb-3 search-bar">
                <button type="submit" class="input-group-text"><i class="bi bi-search"></i></button>
                <input name="searchbar" type="text" class="form-control" :placeholder="text" aria-label="Search"
                    v-model="search">
            </div>
        </form>
        <select id="region" @change="filterCountry" v-model="search">
            <option disabled selected>Filter by Region</option>
            <option v-for="(continent, index) in Continents" :key="index">{{ continent }}</option>
        </select>
        <div class="countryCard">
            <div v-for="(country, index) in filteredCountries" class="card" style="width: 18rem;" :key="index">
                <img :src="country.flags.svg" class="card-img-top" alt="country-flag">
                <div class="card-body">
                    <h1 class="card-text">{{ country.name.common }}</h1>
                    <p>Population: {{ country.population }}</p>
                    <p>Region: {{ country.region }}</p>
                    <p>Capital: {{ country.capital }}</p>
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
            search: "", // Set search to empty initially
            Continents: ["Filter by Region", "Africa", "Asia", "Europe", "Americas", "Oceania", "Antarctica"],
            countriesData: [],
            filteredCountries: []
        };
    },
    mounted() {
        // Trigger filterCountry on mount to apply default filter
        this.filterCountry();
    },
    methods: {
        async filterCountry() {
            await this.getData();
            this.filteredCountries = this.countriesData.filter(country => {
                const searchMatch = country.name.common.toLowerCase().includes(this.search.toLowerCase());
                const regionMatch = country.region.toLowerCase().includes(this.search.toLowerCase());
                return searchMatch || regionMatch;
            });
        },
        async getData() {
            if (this.countriesData.length === 0) {
                const response = await fetch("https://restcountries.com/v3.1/all");
                this.countriesData = await response.json();
            }
            this.filteredCountries = this.countriesData; // Initialize filteredCountries
        }
    }
};
</script>
