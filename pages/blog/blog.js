
function Blog({ posts }) {
    console.log(posts);
    return (
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    )
  }
  
  // This function gets called at 
  // build time on server-side.
  // It may be called again, on a 
  // serverless function, if
  // revalidation is enabled and a 
  //new request comes in
  export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
  
    return {
      props: {
        posts,
      },
      // Next.js will attempt to
      // re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    }
  }
  
  export default Blog