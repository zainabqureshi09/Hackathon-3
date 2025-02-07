import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "kwwlf65g",
  dataset: "production",
  apiVersion: "2025-01-18",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN,
});

export default client;
