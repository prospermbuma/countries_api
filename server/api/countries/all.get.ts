/* ========================================================
# Method: Get
# Endpoint: api/countries/all
=========================================================*/

import { countryList } from "@doubco/countries";

export default defineEventHandler(() => {
  return {
    all_countries: countryList,
  };
});


