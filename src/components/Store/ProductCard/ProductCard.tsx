import Image from "next/image";
import Link from "next/link";

interface ProductCardInterface {
  product: ProductType;
}

export const ProductCard = ({ product }: ProductCardInterface) => {
  return (
    <Link href={`/product/${product.handle}?id=${product.id}`}>
      <article className="relative">
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={320}
          width={320}
          loading="eager"
        />
        <div>
          <h3>{product.title}</h3>
        </div>
        <span className="p-1 rounded-lg bg-contrastColor absolute top-[-20px] right-[-10px]">${product.price} USD</span>
      </article>
    </Link>
  );
};
