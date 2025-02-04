import { defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "discountPrice",
      title: "Discount Price",
      type: "number",
    },
    {
      name: "discountPercent",
      title: "Discount Percentage",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "T-Shirt", value: "tshirt" },
          { title: "Short", value: "short" },
          { title: "Jeans", value: "jeans" },
          { title: "Hoddie", value: "hoodie" },
          { title: "Shirt", value: "shirt" },
        ],
      },
    },

    {
      name: "isNew",
      type: "boolean",
      title: "New",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "dressStyle",
      title: "Dress Style",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
