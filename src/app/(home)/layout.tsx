import { Hero } from "app/components/Home/Hero";
import { Description } from "app/components/Home/Description";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  );
}
