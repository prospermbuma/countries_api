/* ========================================================
# Method: Post
# Endpoint: api/countries/by-capital
# Body: {capital: string}
=========================================================*/

// import { countries, countryList } from "@doubco/countries";
// import countries from "@doubco/countries";

// console.log(countries);

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   const { capital } = body;
//   return {

//   };
// });

// import countries from "@doubco/countries";
// console.log(countries);

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   const { capital } = body;

//   // Find the country by capital (case-insensitive match)
//   const country = Object.values(countries).find(
//     (c) => c.capital.toLowerCase() === capital.toLowerCase()
//   );

//   return {
//     success: !!country,
//     data: country || null,
//     message: country ? "Country found" : "Country not found"
//   };
// });

import countries from "@doubco/countries";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { capital } = body;
  const countriesArr = Object.values(countries);
  return {
    countries: countriesArr.filter((Object) => Object.data.includes(capital)),
  };
});
