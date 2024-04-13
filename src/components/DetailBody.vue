<template>
    <div id="contents-two">
        <h1 tabindex="0">{{ country.name.common }}</h1>
        <div id="main">
            <div>
                <p tabindex="0"><b>Native Name: </b><span v-html="getNativeName(country)"></span></p>
                <p tabindex="0"><b>Population: </b>{{ country.population }}</p>
                <p tabindex="0"><b>Region: </b>{{ country.region }}</p>
                <p tabindex="0"><b>Sub Region: </b>{{ getSubRegion(country.subregion) }}</p>
                <p tabindex="0"><b>Capital: </b>{{ getCapital(country.capital) }}</p>
            </div>
            <div id="sub">
                <p tabindex="0"><b>Top Level Domain: </b>{{ format(country.tld) }}</p>
                <p tabindex="0"><b>Currencies: </b>{{ getCurrencies(country) }}</p>
                <p tabindex="0"><b>Languages: </b>{{ getLanguages(country) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        country: Object,
    },
    methods: {
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
        getSubRegion(country) {
            if (typeof country === "string") {
                return country;
            } else {
                return "N/A";
            }
        },
        getNativeName(country) {
            let nativeName = "";
            const nativeNames = country.name.nativeName;
            if (Array.isArray(nativeNames) && nativeNames.length > 0) {
                nativeName = nativeNames[0].official;
            } else if (typeof nativeNames === "object") {
                const firstKey = Object.keys(nativeNames)[0];
                if (firstKey) {
                    nativeName = nativeNames[firstKey].official;
                }
            }
            return nativeName || "N/A";
        },
        getCurrencies(country) {
            if (country.currencies) {
                const currency = country.currencies[Object.keys(country.currencies)[0]];
                return currency ? currency.name : "N/A";
            }
            return "N/A";
        },
        getLanguages(country) {
            if (country.languages) {
                return Object.values(country.languages).join(", ") || "N/A";
            }
            return "N/A";
        },
    },
};
</script>
