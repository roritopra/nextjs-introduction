import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import { SanitizeHTML } from "app/components/shared/SanitizeHTML";

interface ProductViewProps {
  product: ProductType;
}

export const ProductView = ({ product }: ProductViewProps) => {
  return (
    <main>
      <section>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section>
        <h1>{product.title}</h1>
        <p>{product.tags}</p>
        <SanitizeHTML tag="p">
          {product.description}
        </SanitizeHTML>
        <span>$ {product.price}</span>
        <ProductViewItemsOrder maxQuantity={product.quantity} />
      </section>
    </main>
  );
};
