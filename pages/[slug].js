export async function getStaticProps({ locale }) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(`https://.../posts?locale=${locale}`)
    const posts = await res.json()
   
    if (posts.length === 0) {
      return {
        notFound: true,
      }
    }
   
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }