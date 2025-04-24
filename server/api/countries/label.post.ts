/* ========================================================
# Method: Post
# Endpoint: api/countries/by-label
# Body: {country: string}
=========================================================*/

import { countryList } from "@doubco/countries";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { country } = body;
  return {
    countries: countryList.filter((Object) => Object.label.includes(country)),
  };
});
