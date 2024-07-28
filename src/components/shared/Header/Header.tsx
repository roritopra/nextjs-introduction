import Link from "next/link";

export const Header = () => {
  return (
    <header className="p-10">
      <nav>
        <ul className="flex gap-8 [&>a]:text-white [&>a]:font-semibold [&>a]:text-xl">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
