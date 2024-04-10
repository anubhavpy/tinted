
"use client"
import { useEffect, useState, Suspense } from 'react';
import ReactPlayer from 'react-player';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Suspense className="w-96 h-72">
          <ReactPlayer url="/0209.mov" />
        </Suspense>
      )}
    </>
  );
}

