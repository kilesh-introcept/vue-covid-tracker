<template>
  <div class="relative">
    <input
      class="w-full p-2 outline-0 shadow rounded"
      type="text"
      autocomplete="off"
      v-model="country"
      @focus="countryList = true"
      :placeholder="inputMsg"
    />
    <ul
      v-if="filteredCountries.length !== 0 && countryList"
      class="w-full bg-white p-4 rounded mt-2 shadow-md absolute max-h-64 overflow-auto"
    >
      <li
        class="p-2 hover:bg-slate-200 rounded cursor-pointer"
        v-for="(filteredCountry, index) in filteredCountries || []"
        :key="index"
        @click="selectCountry(filteredCountry)"
      >
        {{ filteredCountry.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CustomAutoComplete",
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      country: "",
      countryList: false,
      filteredCountries: [],
      inputMsg: "Search Country",
    };
  },

  mounted() {
    this.filterCountries();
  },

  methods: {
    filterCountries() {
      if (this.country.length === 0) {
        this.filteredCountries = this.countries.Country;
      }
      this.filteredCountries = this.countries.filter((country) => {
        return country.name
          .toLowerCase()
          .startsWith(this.country.toLowerCase());
      });
    },
    selectCountry(country) {
      this.country = country.name;
      this.countryList = false;
      this.$emit("countrySelected", this.country);
    },
  },
  watch: {
    country() {
      this.filterCountries();
    },
  },
};
</script>
