<template>
    <div class="country-detail">
        <button type="button" >
            <i class="bi bi-arrow-left"></i> Back
        </button>
        <div v-if="country" class="card" style="width: 18rem;">
            <img :src="country.flags.svg" class="card-img-top" alt="country-flag">
            <div class="card-body">
                <h1>{{ country.name.common }}</h1>
                <p><b>Native Name: </b>{{ country.name.native }}</p>
                <p><b>Population: </b>{{ country.population }}</p>
                <p><b>Region: </b>{{ country.region }}</p>
                <p><b>Sub Region: </b>{{ country.subregion }}</p>
                <p><b>Capital: </b>{{ formatCapital(country.capital) }}</p>
                <p><b>Top Level Domain: </b>{{ country.topLevelDomain }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryDetail",
    props: {
        country: Object // Received country data as a prop
    },
    methods: {
        formatCapital(capital) {
            if (Array.isArray(capital)) {
                return capital.join(", ");
            } else {
                return capital;
            }
        }
    }
};
</script>
