import Layout from "../../components/layout";
export default function gallery({ images }) {
    return (
        <Layout> 
            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        {images.slice(0, 30).map((image) => (
                            <div className="flex flex-wrap w-1/3">
                                <div className="w-full p-1 md:p-2 hover:scale-125">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={image.thumbnailUrl} />
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {

    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const images = await res.json();

    return {
        props: {
            images: images,
        }
    }
}