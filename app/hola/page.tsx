import React from 'react';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hola</h1>
      <Image
      src="/next.svg"
      width={500}
      height={500}
      alt="Picture of the author"
        /> 
    </main>
  );
}