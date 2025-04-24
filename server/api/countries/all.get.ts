/* ========================================================
# Method: Get
# Endpoint: api/countries/all
=========================================================*/

import { countries } from "@doubco/countries";

export default defineEventHandler(() => {
  return {
    countries: countries,
  };
});


