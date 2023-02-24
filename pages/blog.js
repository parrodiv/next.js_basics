import sleep from 'await-sleep'
import Link from 'next/link'

export default function Blog(props) {
  return (
    <>
      <h2>The Blog</h2>
      {props.posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch(
    'https://learnwebcode.github.io/json-example/posts.json'
  )
  const data = await response.json()

  await sleep(5000)
  //in production mode this sleep is not reached because data are static, they are not rerendered every time as with getServerSideProps

  return {
    props: {
      posts: data.posts,
    },
  }
}

// You should use getStaticProps if:

// The data required to render the page is available at build time ahead of a user’s request

// The data comes from a headless CMS

// The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance

// The data can be publicly cached (not user-specific). This condition can be bypassed in certain specific situation by using a Middleware to rewrite the path.