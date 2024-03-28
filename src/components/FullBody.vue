<template>
    <div class="container">
        <form id="form" @submit.prevent="filterCountry">
            <div class="input-group mb-3 search-bar">
                <button type="submit" class="input-group-text"><i class="bi bi-search"></i></button>
                <input name="searchbar" type="text" class="form-control" :placeholder="text" aria-label="Search"
                    v-model="search">
            </div>
        </form>
        <select id="region">
            <option disabled selected>Filter by Region</option>
            <option v-for="(continent, index) in Continents" :key="index">{{ continent }}</option>
        </select>
        <div class="countryCard">
            <div v-for="(country, index) in myJSON" class="card" style="width: 18rem;" :key="index">
                <img :src="country.flags['svg']" class="card-img-top" alt="country-flag">
                <div class="card-body">
                    <h1 class="card-text">{{ country.name }}</h1>
                    <p>Population: {{ country.population }}</p>
                    <p>Region: {{ country.region }} </p>
                    <p>Capital: {{ country.capital }}</p>
                </div>
            </div>
        </div>    
    </div>

</template>
<script>
import json from "../assets/data.json";
export default {
    name: "FullBody",
    data() {
        return {
            text: "Search for a country...",
            search: "",
            Continents: ["Africa", "Asia", "Europe", "North America", "South America", "Oceania", "Antartica"],
            myJSON: json
        };
    },
    methods: {
        filterCountry() {

        }
    },
};
</script>
