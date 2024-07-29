import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const collections = await getCollections();

  return (
    <main>
      <nav className="flex flex-wrap gap-4 mb-9 pl-10">
        {collections.map((collection: any) => (
          <Link
            key={collection.id}
            className="bg-gradientColor text-white p-2 rounded-md"
            href={"/store/" + collection.handle + "?id=" + collection.id}
          >
            {collection.title}
          </Link>
        ))}
      </nav>
      {children}
    </main>
  );
}
