import "../connection.js";
import axios from "axios";
import Country from "../../models/country.js";

const seed = async () => {
  try {
    const bulkCountries = []
    // Fetch the countries from Rest API
    const countries = await axios.get("https://restcountries.com/v3.1/all");

    // Cherry pick name, region, and capital to save to our own DB
    countries.data.forEach(async (country) => {
      const countryData = {
        name: country.name.common,
        region: country.region,
        capital: country.capital
          ? country.capital[0] || country.capital
          : "No capital",
      };

      bulkCountries.push(countryData)
    });

    const seedResponse = await Country.insertMany(bulkCountries)
    console.log(seedResponse)

    process.exit()
  } catch (error) {
    console.error(error);
  }
};

seed();
