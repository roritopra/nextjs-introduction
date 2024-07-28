"use client";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-10">
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
