// lib/sanity.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "0e6q8c0i",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
});
