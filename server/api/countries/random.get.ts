/* ========================================================
# Method: Get
# Endpoint: api/random
=========================================================*/
import { countries, countryList } from "@doubco/countries";

export default defineEventHandler(() => {
  const countriesArr = Object.values(countries);
  return {
    random_country:
      countriesArr[Math.floor(Math.random() * countriesArr.length)],
  };
});

// export default defineEventHandler(() => {
//   return {
//     random_country: countryList[Math.floor(Math.random() * countryList.length)],
//   };
// });
