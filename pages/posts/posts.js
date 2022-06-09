import Head from 'next/head'
import Link from 'next/link';
export default function Post() {
  return (
    <>
      <Head>
        <title>Post Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <Link href="/">
          <a className="text-red-400 border-lime-300">Home</a>
        </Link>
        <h1>
          I'm From Post
        </h1>
      </div>
    </>

  )
}