<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="space-y-4">
        <CovidTrackerCards :datas="this.globalStats" title="Global" />
        <CustomAutoComplete
          :countries="countries"
          @countrySelected="getCountryData($event)"
        />
        <CovidTrackerCards :datas="this.countryStats" title="Country" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomAutoComplete from "@/components/utils/custom-auto-complete.vue";
import CovidTrackerCards from "./covid-tracker-cards.vue";
const url = "https://api.covid19api.com/summary";
export default {
  name: "CovidTracker",
  components: {
    CustomAutoComplete,
    CovidTrackerCards,
  },
  data() {
    return {
      loading: true,
      dataDate: "",
      globalData: [],
      globalStats: {},
      countries: [],
      countryData: {},
      countryStats: [],
      country: "Nepal",
      countriesData: [],
    };
  },

  methods: {
    async fetchCovidData() {
      try {
        const res = await fetch(url);
        const data = await res.json();

        this.dataDate = data.Date;
        this.globalData = data.Global;
        this.countriesData = data.Countries;
        (this.globalStats = [
          {
            title: "Total Confirmed",
            value: this.globalData?.TotalConfirmed.toLocaleString("en-us"),
            new: this.globalData?.NewConfirmed.toLocaleString("en-us"),
            color: "border-red-500",
          },
          {
            title: "Total Recovered",
            value: this.globalData?.TotalRecovered.toLocaleString("en-us"),
            new: this.globalData?.NewRecovered.toLocaleString("en-us"),
            color: "border-green-500",
          },
          {
            title: "Total Deaths",
            value: this.globalData?.TotalDeaths.toLocaleString("en-us"),
            new: this.globalData?.NewDeaths.toLocaleString("en-us"),
            color: "border-gray-500",
          },
        ]),
          (this.countries = data.Countries.map((country) => {
            return {
              name: country.Country,
              slug: country.Slug,
            };
          }));

        this.getCountryData(this.country);
        console.log(this.country);
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },

    getCountryData(country) {
      this.countryData = this.countriesData.find(
        (el) => el.Country === country
      );
      this.countryStats = [
        {
          title: "Total Confirmed",
          value: this.countryData?.TotalConfirmed.toLocaleString("en-us"),
          new: this.countryData?.NewConfirmed.toLocaleString("en-us"),
          color: "border-red-500",
        },
        {
          title: "Total Recovered",
          value: this.countryData?.TotalRecovered.toLocaleString("en-us"),
          new: this.countryData?.NewRecovered.toLocaleString("en-us"),
          color: "border-green-500",
        },
        {
          title: "Total Deaths",
          value: this.countryData?.TotalDeaths.toLocaleString("en-us"),
          new: this.countryData?.NewDeaths.toLocaleString("en-us"),
          color: "border-gray-500",
        },
      ];
    },
  },

  async created() {
    await this.fetchCovidData();
  },
};
</script>
