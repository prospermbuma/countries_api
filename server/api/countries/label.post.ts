/* ========================================================
# Method: Post
# Endpoint: api/countries/label
# Body: {label: string}
=========================================================*/

import { countryList } from "@doubco/countries";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { label } = body;
  if (!label) {
    return {
      status: 400,
      message: "No label provided in body",
    };
  }
  return {
    countries: countryList.filter((Object) => Object.label.includes(label)),
  };
});
