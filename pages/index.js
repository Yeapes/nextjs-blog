import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <h1 className="title"> 
        <Link href="/posts/posts">
          <a className="text-red-400 border-lime-300">Posts</a>
        </Link> 
      </h1>

      <h1 className="title"> 
        <Link href="/responsive/responsive">
          <a className="text-red-400 border-lime-300">Responsive</a>
        </Link> 
      </h1>
      
    </div>
    </>
  )
}