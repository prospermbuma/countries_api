import { countries, countryList } from "@doubco/countries";

export default defineEventHandler(() => {
  return {
    random_country: countryList[Math.floor(Math.random() * countryList.length)],
  };
});
