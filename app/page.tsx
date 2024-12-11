import Customers from "@/components/Customers";
import HeroSection from "@/components/HeroSection";
import Shopping from "@/components/Shopping";
import DressStyle from "@/components/DressStyle";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Shopping/> 
      <Customers/>
      <DressStyle></DressStyle>
    </>
    
  );
}
