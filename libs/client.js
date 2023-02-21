// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "chot-demo",
  apiKey: process.env.API_KEY,
});
