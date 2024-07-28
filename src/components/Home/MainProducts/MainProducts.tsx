import Image from "next/image";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json?`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );
    const { products } = await response.json();
    return products;
  } catch (error) {
    console.error(error);
  }
};

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
