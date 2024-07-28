import { Loader } from "app/components/shared/Loader";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader />
    </div>
  );
}