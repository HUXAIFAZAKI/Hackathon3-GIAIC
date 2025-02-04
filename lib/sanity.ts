// lib/sanity.js
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "0e6q8c0i", // Replace with your Sanity project ID
  dataset: "production", // Or the dataset you are using (usually 'production')
  useCdn: true, // Use CDN for faster responses
  apiVersion: "2025-01-13", // Keep the API version up to date
});
