import Head from 'next/head'
import Header from '../Components/Header'
import Poster from '../Components/Poster'
import Posts from '../Components/Posts'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props{
  posts:[Post];
}

export default function Home({ posts}: Props) {
  console.log(posts);
  return (
    <div className="mx-auto">
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
      <Posts />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author =>{
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query);

  return{
    props:{
      posts,
    }
  }
}
