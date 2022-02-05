import Head from 'next/head';
import Header from '../Components/Header';
import Poster from '../Components/Poster';

export default function Home() {
  return (
    <div className="mx-auto">
      <Head>
        <title>Blog Website</title>
        <link rel="icon" href="https://icon2.cleanpng.com/20180328/tiw/kisspng-medium-logo-publishing-blog-i-5abb6adc86a881.6127661915222320285516.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Poster/>
    </div>
  )
}
