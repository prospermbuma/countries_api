/* ========================================================
# Method: Post
# Endpoint: api/countries/currency
# Body: {currency: string}
=========================================================*/

import { countries } from "@doubco/countries";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { currency } = body;
  if (!currency) {
    return {
      status: 400,
      message: "No currency provided in body",
    };
  }
  const countriesArr = Object.values(countries);
  return {
    countries: countriesArr.filter((Object) => {
      if (Object.currency) {
        return Object.currency.includes(currency);
      }
    }),
  };
});
