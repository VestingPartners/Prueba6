
'use client'

import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Hola</h1>
      <Image
      src="/next.svg"
      width={500}
      height={500}
      alt="Picture of the author"
        /> 
    
    <button type="button" onClick={() => router.push('/')}>
      Dashboard
    </button>

    </main>
  );
}