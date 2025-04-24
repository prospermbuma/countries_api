/* ========================================================
# Method: Get
# Endpoint: api/countries/all
=========================================================*/

// import { countries } from "@doubco/countries";

// export default defineEventHandler(() => {
//   return {
//     countries: countries,
//   };
// });

/* ========================================================
# Method: Get
# Endpoint: api/countries/all
=========================================================*/

import { countries } from "@doubco/countries";

export default defineEventHandler(async (event) => {
  const countriesArr = Object.values(countries);
  return {
    countries: countriesArr,
  };
});
