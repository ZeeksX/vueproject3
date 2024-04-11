<template>
  <div class="container">
    <div id="filters">
      <form id="form" @submit.prevent="filterCountry">
        <div id="input-bar">
          <i id="search-icon" class="bi bi-search"></i>
          <input @input="updateCountry" name="searchbar" id="input-field" type="text"
            placeholder="Search for a country..." aria-label="Search" v-model="search" />
        </div>
      </form>
      <select id="region" @change="updateRegion" v-model="region">
        <option disabled selected hidden>Filter by Region</option>
        <option v-for="(continent, index) in Continents" :key="index">
          {{ continent }}
        </option>
      </select>
    </div>
    <div class="countryCard">
      <div v-for="(country, index) in filteredCountries" class="card" :key="index" @click="updateCountries(index)"
        :class="{ selected: selectedIndex === index }">
        <div id="contents">
          <button v-if="selectedIndex == index" id="back"><i class="fa fa-arrow-left" aria-hidden="true"></i>
            Back</button>
          <img :src="country.flags.svg" class="card-img-top" :alt="country.flags.alt" />
        </div>
        <div v-if="selectedIndex !== index" class="card-body">
          <h1 class="card-text">{{ country.name.common }}</h1>
          <p><b>Population: </b>{{ country.population }}</p>
          <p><b>Region: </b> {{ country.region }}</p>
          <p><b>Capital: </b> {{ getCapital(country.capital) }}</p>
        </div>
        <div v-else class="detail">
          <h1>{{ country.name.common }}</h1>
          <div id="main">
            <div>
              <p><b>Native Name: </b><span v-html="getNativeName(country)"></span></p>
              <p><b>Population: </b>{{ country.population }}</p>
              <p><b>Region: </b>{{ country.region }}</p>
              <p><b>Sub Region: </b>{{ getSubRegion(country.subregion) }}</p>
              <p><b>Capital: </b>{{ getCapital(country.capital) }}</p>
            </div>
            <div id="sub">
              <p><b>Top Level Domain: </b>{{ format(country.tld) }}</p>
              <p><b>Currencies: </b>{{ getCurrencies(country) }}</p>
              <p><b>Languages: </b>{{ getLanguages(country) }}</p>
            </div>
          </div>
          <footer>
            <div class="footer-buttons">
              <p><b>Border Countries: </b></p>
              <button v-for="(button, index) in buttons" :key="index">{{ button }}</button>
            </div>
          </footer>
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
      selectedIndex: null,
      buttons: []
    };
  },
  mounted() {
    this.filterCountry();
  },
  methods: {
    async getData() {
      if (this.countriesData.length === 0) {
        const response = await fetch("https://restcountries.com/v3.1/all");
        this.countriesData = await response.json();
      }
      this.filteredCountries = this.countriesData;
      console.log(this.filteredCountries)
    },
    async filterCountry() {
      await this.getData();
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
    updateCountries(index) {
      if (this.selectedIndex !== index) {
        this.selectedIndex = index;
        this.buttons = [];
        this.getBorders(this.filteredCountries[index]);
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
    getSubRegion(country) {
      if (typeof country === "string") {
        return country
      } else {
        return "N/A"
      }
    },
    getNativeName(country) {
      let nativeName = "";
      const nativeNames = country.name.nativeName;
      if (Array.isArray(nativeNames)) {
        const firstItem = nativeNames[0];
        if (firstItem) {
          nativeName = firstItem["official"];
        }
      } else if (typeof nativeNames === "object") {
        const keys = Object.keys(nativeNames);
        const firstKey = keys[0];
        if (firstKey) {
          nativeName = nativeNames[firstKey]["official"];
        }
      } else {
        return "N/A"
      }
      return nativeName;
    },
    getCurrencies(country) {
      let currency = "";
      const currencies = country.currencies;
      if (typeof currencies === "object") {
        const keys = Object.keys(currencies);
        if (keys.length > 0) {
          currency = currencies[keys[0]].name;
        }
        return currency;
      } else {
        return "N/A";
      }
    },
    getLanguages(country) {
      let languages = "";
      const languageObject = country.languages;
      if (typeof languageObject === "object") {
        const keys = Object.keys(languageObject);
        keys.forEach((key, index) => {
          if (index > 0) {
            languages += ", "
          }
          languages += languageObject[key];
        });
      } else {
        return "N/A"
      }
      return languages;
    },
    getBorders(country) {
      const borders = country.borders;
      if (Array.isArray(borders) && borders.length > 0) {
        borders.forEach(borderCode => {
          const borderCountry = this.countriesData.find(country => country.cca3 === borderCode);
          if (borderCountry) {
            this.buttons.push(borderCountry.name.common);
          } else {
            this.buttons.push("N/A");
          }
        });
      } else {
        this.buttons.push("N/A");
      }
    }

  }
}
</script>
