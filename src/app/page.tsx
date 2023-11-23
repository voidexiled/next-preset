import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Next.js + TypeScript + ESLint</h1>
      <p>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
      </p>
    </div>
  )
}
