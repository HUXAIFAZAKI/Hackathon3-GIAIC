import Customers from "@/components/Customers";
import HeroSection from "@/components/HeroSection";
import Shopping from "@/components/Shopping";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Your E-commerce Site</title>
      <meta name="description" content="Shop the latest trends in fashion and accessories." />
      <meta property="og:title" content="Your E-commerce Site" />
      <meta property="og:description" content="Shop the latest trends in fashion and accessories." />
      <meta property="og:image" content="/images/og-image.jpg" />
    </Head>
      <HeroSection/>
      <Shopping/> 
      <Customers/>
    </>
  );
}
