import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Technologies from "@/components/Technologies";
import TestNavbar from "@/components/ui/TestNav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <TestNavbar
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Technologies />
      </div>
    </main>
  );
}

