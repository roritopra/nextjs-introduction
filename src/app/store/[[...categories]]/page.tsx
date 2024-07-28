interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default function page(props: CategoryProps) {
  //throw new Error("Not implemented");
  const { categories } = props.params;
  return <div>Dinamic category: {categories}</div>;
}
