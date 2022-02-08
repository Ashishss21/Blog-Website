import Head from 'next/head'
import Link from 'next/link'
import Header from '../Components/Header'
import Poster from '../Components/Poster'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post]
}

export default function Home({ posts }: Props) {
  console.log(posts)
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Blog Website</title>
        <link
          rel="icon"
          href="https://icon2.cleanpng.com/20180328/tiw/kisspng-medium-logo-publishing-blog-i-5abb6adc86a881.6127661915222320285516.jpg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Poster />

      {/* Posts */}
      <div className="max-w-7xl grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="group border cursor-pointer rounded-lg overflow-hidden">
                <img
                  className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
                  src={urlFor(post.mainImage).url()!}
                  alt="Post Head"
                />
                <div className="flex justify-between text-center bg-white p-5">
                  <p className='text-lg font-bold'>{post.title}</p> <br/>
                  <p className='text-xs'>{post.description}</p>
                </div>
                {/* <img
                className="h-12 w-12 rounded-full"
                src={urlFor(post.author.image).url()!}
                alt="Author Photo"
              /> */}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    description,
    mainImage,
    slug,
    author{
      name,
      image,
    },
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}
