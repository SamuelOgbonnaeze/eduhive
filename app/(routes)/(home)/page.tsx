
import Hero from "@/components/hero";
import MeetAdmin from "@/components/meet-admin";
import Navbar from "@/components/navbar";
import Why from "@/components/why";
import Blog from "@/components/blog";
import Partners from "@/components/partners";


export default function Home() {
  return (
    <div className="md:px-[100px]">
      <Navbar />
      <Hero />
      <Why />
      <MeetAdmin />
      <Blog />
      <Partners />
      Hello world
      
    </div>
  );
}
