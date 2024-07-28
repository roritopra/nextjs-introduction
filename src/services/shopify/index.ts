import { shopifyurls } from "./urls";
import { env } from "app/config/env";

export const getProducts = async () => {
  try {
    const response = await fetch(shopifyurls.products.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};
