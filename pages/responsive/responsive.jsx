import Head from 'next/head'
import Link from 'next/link';
export default function Responsive() {
    return (

        <>
            <Head>
                <title>Responsive Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <h2>
                    <Link href="/">
                        <a className="text-red-400 border-lime-300">Home</a>
                    </Link>
                </h2>
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://demo.sirv.com/chair.jpg" alt="Man looking at item at a store" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>
        </>
    );
}