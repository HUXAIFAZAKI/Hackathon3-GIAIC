import { client } from "../../../lib/sanity";

export async function GET() {
  try {
    const query = `*[_type == "product"]{
       _id,
      name,
      description,
      price,
      "imageUrl" : image.asset->url,
      category,
      discountPercent,
      discountPrice,
      isNew,
      colors,
      sizes,
      rating
    }`;

    const products = await client.fetch(query);
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching products", error }),
      {
        status: 500,
      }
    );
  }
}
