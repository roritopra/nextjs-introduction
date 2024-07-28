export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <nav>
        Navegación de las categorías
        {children}
      </nav>
    </main>
  );
}
