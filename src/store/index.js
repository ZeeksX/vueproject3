import { defineStore } from "pinia";

export const useCountryStore = defineStore("country", {
  state: () => ({
    countriesData: [],
    filteredCountries: [],
    perPage: 20,
    currentPage: 1,
  }),

  actions: {
    async fetchData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        this.countriesData = await response.json();
        this.filteredCountries = this.countriesData;
        this.updateFilter(); 
      } catch (error) {
        console.error(error);
      }
    },
    updateFilter({ search = "", region = "Filter by Region" } = {}) {
      this.filteredCountries = this.countriesData.filter((country) => {
        const searchMatch = country.name.common.toLowerCase().includes(search.toLowerCase());
        const regionMatch = country.region.toLowerCase().includes(region.toLowerCase());
        return searchMatch || regionMatch;
      });
      // Reset currentPage to 1 when filter is updated
      this.currentPage = 1;
    },
    changePage(page) {
      this.currentPage = page;
    },
  },
});
