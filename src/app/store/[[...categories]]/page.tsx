import { ProductsWrapper } from "app/components/Store/ProductsWrapper/ProductsWrapper";
import { getProducts } from "app/services/shopify";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default async function page(props: CategoryProps) {
  const products = await getProducts();
  return <ProductsWrapper products={products} />;
}
