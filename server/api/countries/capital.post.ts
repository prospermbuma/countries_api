/* ========================================================
# Method: Post
# Endpoint: api/countries/capital
# Body: {capital: string}
=========================================================*/

import { countries } from "@doubco/countries";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { capital } = body;
  if (!capital) {
    return {
      status: 400,
      message: "No capital provided in body",
    };
  }
  const countriesArr = Object.values(countries);
  return {
    countries: countriesArr.filter((Object) => {
      if (Object.capital) {
        return Object.capital.includes(capital);
      }
    }),
  };
});
