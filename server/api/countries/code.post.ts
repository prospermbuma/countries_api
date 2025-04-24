/* ========================================================
# Method: Post
# Endpoint: api/countries/code
# Body: {code: string}
=========================================================*/

import { countries } from "@doubco/countries";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { code } = body;
  if (!code) {
    return {
      status: 400,
      message: "No code provided in body",
    };
  }
  const countriesArr = Object.values(countries);
  return {
    countries: countriesArr.filter((Object) => {
      if (Object.code) {
        return Object.code.includes(code);
      }
    }),
  };
});
