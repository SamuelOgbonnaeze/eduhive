
import Hero from "@/components/hero";
import MeetAdmin from "@/components/meet-admin";
import Navbar from "@/components/navbar";
import Why from "@/components/why";


export default function Home() {
  return (
    <div className="md:px-[100px]">
      <Navbar />
      <Hero />
      <Why />
      <MeetAdmin />
      Hello world
      
    </div>
  );
}
