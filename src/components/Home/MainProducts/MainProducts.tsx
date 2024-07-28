import Image from "next/image";
import { getProducts } from "app/services/shopify";

export const MainProducts = async () => {
  const products = await getProducts();
  console.log(products);
  return (
    <section>
      <h1 className="text-center py-20 text-5xl">✨Principal products</h1>
      <div className="grid grid-cols-2">
        {products?.map((product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id} className="relative w-full">
              <p className="absolute pl-2 pt-2">{product.title}</p>
              <Image src={imageSrc} width={500} height={500} alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
