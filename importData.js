import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "0e6q8c0i",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",
  token:
    "sk6Dpm3MJANeD40INnlqjNrWdUJC747ZNxs8yWR4V3BqjwY7GF8ib1wyRXcQUPl96l2Fun7xvJ8nY6ochcZiBlnyi3K0zQYzLObQ8EObjirKwqmC9KenYA7Pgwu1b1djIM3Aj32rmMXjHZ0h2WYpL4l3LHnjKfd2sDUBCirBbj8cEFLUjZ28",
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload("image", bufferImage, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: "product",
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: "image",
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        discountPrice:
          product.discountPercent > 0 &&
          product.price - (product.price * product.discountPercent) / 100,
        isNew: product.isNew,
        rating: (Math.random() * 5).toFixed(0),
      };

      const createdProduct = await client.create(document);
      console.log(
        `Product ${product.name} uploaded successfully:`,
        createdProduct
      );
    } else {
      console.log(
        `Product ${product.name} skipped due to image upload failure.`
      );
    }
  } catch (error) {
    console.error("Error uploading product:", error);
  }
}

async function importProducts() {
  try {
    const response = await fetch(
      "https://template1-neon-nu.vercel.app/api/products"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

importProducts();
