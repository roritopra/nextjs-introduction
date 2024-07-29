import { ProductCard } from "../ProductCard";

interface ProductsWrapperProps {
  products: ProductType[];
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
