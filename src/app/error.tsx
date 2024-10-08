"use client";

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <div className="grid h-screen place-content-center px-4">
      <h1 className="uppercase tracking-widest text-gray-500">
        404 | Not Found
      </h1>
    </div>
  );
}
