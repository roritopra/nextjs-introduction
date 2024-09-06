import { MainProducts } from "app/components/Home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to he future world, an ecommerce industry",
  keywords: ["future", "world", "ecommerce", "industry"],
};


export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
